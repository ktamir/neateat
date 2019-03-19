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

FactoryBot.define do
  factory :review do
    reviewer_name { Faker::Superhero.name }
    rating { Faker::Number.between(1, 3) }
    description { Faker::Restaurant.review }
    restaurant factory: :restaurant
  end
end
