  json.extract!(post,
                 :id,
                 :author_id,
                 :location_id,
                 :created_at,
                 :updated_at,
                 :content)
  json.author do
    json.partial! 'api/users/liteuser.json', user: post.author
  end
  json.comments post.comments.order(created_at: :asc).pluck(:id)
