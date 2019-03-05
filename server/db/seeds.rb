# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Restaurant.delete_all

20.times do
  Restaurant.create(
    name: Faker::Restaurant.name,
    cuisine: Faker::Restaurant.type,
    rating: Faker::Number.between(1, 3),
    accepts_10bis: Faker::Boolean,
    address: Faker::Address.street_address,
    max_delivery_time: Faker::Number.between(30, 120)
  )
end
