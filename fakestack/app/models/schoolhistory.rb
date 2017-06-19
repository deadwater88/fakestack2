class Schoolhistory < ApplicationRecord
  validates :user, :school, presence: true

  belongs_to :user


end
