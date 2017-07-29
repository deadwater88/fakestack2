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

  def self.approve_friends(id1, id2)
    user1 = User.find_by(id: id1)
    user2 = User.find_by(id: id2)
    user1.friends[id2] = user2.attributes.slice('id', 'first_name', 'last_name', 'profile_img_url')
    user2.friends[id1] = user1.attributes.slice('id', 'first_name', 'last_name', 'profile_img_url')
    user1.save
    user2.save
  end

  def self.create_friending(user,recipient_id)
    recipient = User.find_by(id: recipient_id)
    user.recipients[recipient_id] = recipient.attributes.slice('id', 'first_name', 'last_name', 'profile_img_url')
    recipient.requesters[user.id] = user.attributes.slice('id', 'first_name', 'last_name', 'profile_img_url')
    user.save
    recipient.save
    user.recipients
  end

end
