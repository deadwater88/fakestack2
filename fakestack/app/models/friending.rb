class Friending < ApplicationRecord
  validates :requester, :recipient, presence: true
  validates :requester, uniqueness: { scope: :recipient,
    message: "Friend request already made" }

  belongs_to :requester, class_name: :User
  belongs_to :recipient, class_name: :User


end
