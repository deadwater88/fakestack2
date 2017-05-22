class CreatePosts < ActiveRecord::Migration[5.0]
  def change
    create_table :posts do |t|
      t.integer :author_id, null: false
      t.text :content, null: false
      t.integer :location_id, null: false
      t.index :author_id
      t.index :location_id
      t.timestamps
    end
  end
end
