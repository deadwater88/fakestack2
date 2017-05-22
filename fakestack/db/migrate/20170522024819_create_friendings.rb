class CreateFriendings < ActiveRecord::Migration[5.0]
  def change
    create_table :friendings do |t|
      t.integer :requester_id, null: false
      t.integer :recipient_id, null: false
      t.boolean :approved, default: false
      t.timestamps
    end
  end
end
