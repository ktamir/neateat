# == Schema Information
#
# Table name: restaurants
#
#  id                :bigint(8)        not null, primary key
#  name              :string
#  cuisine           :string
#  rating            :integer
#  accepts_10bis     :boolean
#  address           :string
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Restaurant < ApplicationRecord
  validates_presence_of :name
  validates_presence_of :cuisine
  validates_numericality_of :rating, greater_than_or_equal_to: 1,
                            less_than_or_equal_to: 3
  validates_presence_of :accepts_10bis
  validates_presence_of :address
  validates_presence_of :max_delivery_time
end
