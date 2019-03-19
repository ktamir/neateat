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

require 'rails_helper'

RSpec.describe Review, type: :model do
  it { should belong_to(:restaurant) }

  it { should validate_presence_of(:reviewer_name) }
  it { should validate_presence_of(:rating) }
  it { should validate_numericality_of(:rating).is_greater_than_or_equal_to(1) }
  it { should validate_numericality_of(:rating).is_less_than_or_equal_to(3) }
end
