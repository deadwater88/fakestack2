class CreateConversation < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.text :messages, array: true, default: []
      t.integer :participant1_id
      t.integer :participant2_id
      t.index :participant1_id
      t.index :participant2_id
      t.timestamps
    end
  end
end
