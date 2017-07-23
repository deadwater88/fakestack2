class CreateConversation < ActiveRecord::Migration[5.0]
  def change
    create_table :conversations do |t|
      t.text :messages, array: true, default: []
      t.string :participants, presence: true
      t.index :participants
      t.timestamps
    end
  end
end
