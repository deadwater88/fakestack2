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

  has_many :work_histories,
    foreign_key: :user_id,
    class_name: :Workhistory

  has_many :school_histories,
    foreign_key: :user_id,
    class_name: :Schoolhistory


  def friends
    friends1 = User.joins("INNER JOIN friendings AS requesters ON users.id = requesters.requester_id AND requesters.approved = 'true'")
    .where('requesters.recipient_id = ?', id)
    friends2 = User.joins("INNER JOIN friendings AS requesters ON users.id = requesters.recipient_id AND requesters.approved = 'true'")
    .where('requesters.requester_id = ?', id)

    friends1 + friends2
    # .joins("INNER JOIN friendings AS recipients ON users.id = recipients.recipient_id AND recipients.approved = 'true'")
    # .where('requesters.recipient_id = ? OR recipients.requester_id = ?', id, id)
    # friends1 = requesters.where(friendings: {approved: true})
    # friends2 = recipients.where(friendings: {approved: true})
    # friends1 + friends2
  end

  def friendscount
    friends1 = User.joins("INNER JOIN friendings AS requesters ON users.id = requesters.requester_id AND requesters.approved = 'true'")
    .where('requesters.recipient_id = ?', id).count
    friends2 = User.joins("INNER JOIN friendings AS requesters ON users.id = requesters.recipient_id AND requesters.approved = 'true'")
    .where('requesters.requester_id = ?', id).count
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
