class RemoveRatingFromRestaurants < ActiveRecord::Migration[5.2]
  def up
    remove_column :restaurants, :rating
  end

  def down
    add_column :restaurants, :rating, :float
  end
end
