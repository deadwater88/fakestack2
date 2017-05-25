  json.extract!(post,
                 :id,
                 :author_id,
                 :location_id,
                 :created_at,
                 :updated_at,
                 :content)
  json.comments post.comments.order(created_at: :asc).pluck(:id)
