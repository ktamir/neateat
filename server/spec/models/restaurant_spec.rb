# == Schema Information
#
# Table name: restaurants
#
#  id                :bigint(8)        not null, primary key
#  name              :string
#  cuisine           :string
#  rating            :integer
#  accepts_10_bis    :boolean
#  address           :string
#  max_delivery_time :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

require 'rails_helper'

RSpec.describe Restaurant, type: :model do
  it { should validate_presence_of :name }
  it { should validate_presence_of :cuisine }
  it { should validate_numericality_of(:rating).is_greater_than_or_equal_to(1) }
  it { should validate_numericality_of(:rating).is_less_than_or_equal_to(3) }
  it { should validate_presence_of :accepts_10_bis }
  it { should validate_presence_of :address }
  it { should validate_presence_of :max_delivery_time }

  it { should have_many(:reviews).dependent(:destroy) }
end
