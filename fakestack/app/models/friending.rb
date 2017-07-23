class Friending < ApplicationRecord
  validates :requester, :recipient, presence: true
  validates :requester, uniqueness: { scope: :recipient,
    message: "Friend request already made" }

  belongs_to :requester, class_name: :User
  belongs_to :recipient, class_name: :User

  validate :not_self, :equivalent_friending_present



  def not_self
    if requester_id == recipient_id
      errors.add(:requester_id, "Can't friend yourself")
    end
  end

  def equivalent_friending_present
    if Friending.find_by(requester_id: recipient_id, recipient_id: requester_id)
      errors.add(:requester_id, "They have already sent you a friend request")
    end
  end

end
