class Workhistory < ApplicationRecord
  validates :user, :company, presence: true

  belongs_to :user
  serialize :start_date, JSON
  serialize :end_date, JSON
end
