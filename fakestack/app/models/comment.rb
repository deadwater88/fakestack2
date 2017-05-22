class Comment < ApplicationRecord
  validates :content, :author, :parent, :parent_type, presence: true

  belongs_to :author,
    class_name: :User

  belongs_to :parent, polymorphic: true

  has_many :replies, as: :parent,
            foreign_key: :parent_id,
            class_name: :Comment

end
