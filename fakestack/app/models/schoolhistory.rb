class Schoolhistory < ApplicationRecord
  validates :user, :school, presence: true

  belongs_to :user
  serialize :start_date
  serialize :end_date
  after_initialize :set_default_dates

  def set_default_dates
    self.start_date ||= {month:"" , year: ""}.to_yaml
    self.end_date ||= {month:"" , year: ""}.to_yaml
  end

end
