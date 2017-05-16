class User < ApplicationRecord
  validates :email,
            :session_token,
            :password_digest,
            :first_name,
            :last_name,
            presence: true
  validates :password, length: { minimum: 8, allow_nil: true }

  after_initialize :ensure_token
  attr_reader :password


  def reset_token
    self.session_token = SecureRandom::urlsafe_base64
    self.save
    self.session_token
  end

  def ensure_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password(password) ? user : nil
  end


end
