class CreateSchoolhistories < ActiveRecord::Migration[5.0]
  def change
    create_table :schoolhistories do |t|
      t.string :school, null: false
      t.string :school_url
      t.string :school_img_url
      t.integer :user_id, null: false
      t.index :user_id
      t.string :location
      t.text :description
      t.boolean :graduated
      t.date :start_date
      t.date :end_date
      t.string :concentrations, array: true, default: []
      t.string :type
      t.timestamps
    end
  end
end
