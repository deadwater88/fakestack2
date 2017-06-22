class Workhistory < ApplicationRecord
  validates :user, :company, presence: true

  belongs_to :user
  serialize :start_date
  serialize :end_date
end
