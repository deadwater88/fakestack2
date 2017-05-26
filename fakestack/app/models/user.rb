class User < ApplicationRecord
  validates :email,
            :session_token,
            :password_digest,
            :first_name,
            :last_name,
            presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, :session_token, :password_digest, uniqueness: true


  after_initialize :ensure_token
  attr_reader :password

  has_many :received_requests,
    primary_key: :id,
    foreign_key: :recipient_id,
    class_name: :Friending

  has_many :requesters,
    through: :received_requests,
    source: :requester

  has_many :issued_requests,
    primary_key: :id,
    foreign_key: :requester_id,
    class_name: :Friending

  has_many :recipients,
    through: :issued_requests,
    class_name: :User

  has_many :authored_posts,
    foreign_key: :author_id,
    class_name: :Post

  has_many :wall_posts,
    foreign_key: :location_id,
    class_name: :Post


  def friends
    User.includes(:requesters).where({user: {requester: self}, friending: {approved: true }})

    friends1 = self.requesters.where(friendings: {approved: true})
    friends2 = self.recipients.where(friendings: {approved: true})
    friends1 + friends2
  end

  def pending_friend_requests
    self.requesters.where(friendings: {approved: false})
  end

  def pending_friend_invites
    self.recipients.where(friendings: {approved: false})
  end

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
    user && user.is_password?(password) ? user : nil
  end


end
