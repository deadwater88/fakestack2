class CreateWorkhistories < ActiveRecord::Migration[5.0]
  def change
    create_table :workhistories do |t|
      t.string :company, null: false
      t.string :company_url
      t.string :company_img_url
      t.integer :user_id, null: false
      t.index :user_id
      t.string :position
      t.string :location
      t.text :description
      t.boolean :current
      t.date :start_date
      t.date :end_date
      t.timestamps
    end
  end
end
