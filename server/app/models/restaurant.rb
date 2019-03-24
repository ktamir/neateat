# == Schema Information
#
# Table name: restaurants
#
#  id                :bigint(8)        not null, primary key
#  name              :string
#  cuisine           :string
#  accepts_10_bis    :boolean
#  address           :string
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  rating            :float
#

class Restaurant < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :cuisine
  validates_presence_of :accepts_10_bis
  validates_presence_of :address
  validates_presence_of :max_delivery_time
  validates_numericality_of :rating, greater_than_or_equal_to: 1,
                            less_than_or_equal_to: 3, allow_nil: true

  has_many :reviews, dependent: :destroy

  def calculate_average_rating
    self.rating = reviews.average(:rating)
  end
end
