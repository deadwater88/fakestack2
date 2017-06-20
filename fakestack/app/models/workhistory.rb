class Workhistory < ApplicationRecord
  validates :user, :company, presence: true

  belongs_to :User
end
