class Post < ApplicationRecord

  validates :content, :author, :location, presence: true;

  belongs_to :author,
    class_name: :User

  belongs_to :location,
    foreign_key: :location_id,
    class_name: :User

  has_many :comments, as: :parent,
    foreign_key: :parent_id,
    class_name: :Comment


end
