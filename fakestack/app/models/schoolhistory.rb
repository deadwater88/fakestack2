class Schoolhistory < ApplicationRecord
  validates :user, :school, presence: true

  belongs_to :user
  serialize :start_date
  serialize :end_date

end
