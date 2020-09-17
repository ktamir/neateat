# == Schema Information
#
# Table name: reviews
#
#  id            :bigint(8)        not null, primary key
#  reviewer_name :string
#  rating        :integer
#  description   :text
#  restaurant_id :bigint(8)
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates_presence_of :reviewer_name
  validates_presence_of :rating
  validates_presence_of :restaurant
  belongs_to :restaurant
  after_save :set_average_rating, on: %i(create update destroy)
  validates_numericality_of :rating, greater_than_or_equal_to: 1,
                            less_than_or_equal_to: 3

  private

  def set_average_rating
    restaurant.calculate_average_rating
    restaurant.save
  end
end
