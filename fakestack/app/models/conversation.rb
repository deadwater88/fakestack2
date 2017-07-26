class Conversation < ApplicationRecord
  validates :participants, presence: true
  serialize :messages, JSON

  has_many :users,
    through: :users_conversations,
    source: :users

  has_many :users_conversations

  def self.add_message_to_conversation(speaker_id, data)
    recipient_id = data['recipient_id']
    participants = [speaker_id, recipient_id].sort.join("-")
    message = data['message']

    conversation = Conversation.find_by(participants: participants)
    if !conversation
      conversation = Conversation.create(participants: participants)
      UsersConversation.create!(conversation_id: conversation.id, user_id: speaker_id)
      UsersConversation.create!(conversation_id: conversation.id, user_id: recipient_id)
    end
    new_messages = (conversation.messages|| []).concat([message])
    conversation.update_attributes(messages: new_messages)
    conversation
  end

end
