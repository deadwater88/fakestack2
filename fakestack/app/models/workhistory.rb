class Workhistory < ApplicationRecord
  validates :user, :company, presence: true

  belongs_to :user
end
