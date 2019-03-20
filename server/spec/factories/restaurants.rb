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
#

FactoryBot.define do
  factory :restaurant do
    name { Faker::Restaurant.name }
    cuisine { Faker::Restaurant.type }
    rating { Faker::Number.between(1, 3) }
    accepts_10_bis { Faker::Boolean }
    address { Faker::Address }
    max_delivery_time { Faker::Number.between(30, 120) }
  end
end
