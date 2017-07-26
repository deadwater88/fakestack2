class RecreateConversations < ActiveRecord::Migration[5.0]
  def change
    drop_table :conversations
    create_table :conversations do |t|
      t.text :messages
      t.string :participants, presence: true
      t.index :participants
      t.timestamps
    end
  end
end
