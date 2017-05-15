class User < ApplicationRecord
  validates :email, :session_token, :password_digest, :first_name, :last_name, presence: true
  validates :password, length: {minimum: 8, allow_nil: true}

  
end
