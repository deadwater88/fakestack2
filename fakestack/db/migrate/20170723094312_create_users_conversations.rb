class CreateUsersConversations < ActiveRecord::Migration[5.0]
  def change
    create_table :users_conversations, id: false do |t|
      t.belongs_to :user, index: true
      t.belongs_to :conversation, index: true
      t.timestamps
    end
  end
end
