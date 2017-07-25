class Conversation < ApplicationRecord
  validates :participants, presence: true
  serialize :messages

  has_many :users,
    through: :users_conversations,
    source: :User

  has_many :users_conversations

  def self.add_message_to_conversation(speaker_id, data)
    recipient_id = data['recipient_id']
    participants = [speaker_id, recipient_id].sort.join("-")
    message = data['message']
    conversation = Conversation.find_or_create_by(participants: participants)
    conversation.messages = messages.concat(message)
    conversation.save
    conversation
  end

end
