class Conversation < ApplicationRecord
  validates :participant1_id, :participant2_id, presence: true
  validates :participant1_id, uniqueness: {scope: :participant2_id}

end
