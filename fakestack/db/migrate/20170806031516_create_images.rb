class CreateImages < ActiveRecord::Migration[5.0]
  def change
    create_table :images do |t|
      t.integer :user_id, null: false
      t.string :image_url
      t.integer :album_id
      t.string :title
      t.text :tagged_user_ids, array: true, default: []
      t.index :user_id
      t.timestamps
    end
  end
end
