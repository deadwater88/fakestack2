class CreateComments < ActiveRecord::Migration[5.0]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.text :content, null: false
      t.index :author_id
      t.references :parent, polymorphic: true, index: true, null: false
      t.timestamps
    end
  end
end
