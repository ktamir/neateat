class RenameAccepts10bisInRestaurants < ActiveRecord::Migration[5.2]
  def change
    rename_column :restaurants, :accepts_10bis, :accepts_10_bis
  end
end
