class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :reviewer_name
      t.integer :rating
      t.text :description
      t.references :restaurant, foreign_key: true

      t.timestamps
    end
  end
end
