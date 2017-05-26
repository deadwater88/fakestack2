  json.extract!(comment,
                 :id,
                 :author_id,
                 :parent_id,
                 :created_at,
                 :updated_at,
                 :content,
                 :parent_type)

  json.replies comment.replies.map do |reply|
    json.extract!(reply,
                  :id,
                  :author_id,
                  :parent_id,
                  :created_at,
                  :updated_at,
                  :content,
                  :parent_type)
  end

json.parent do

  if comment.parent_type == "Post"
    json.partial! 'api/posts/post', post: comment.parent
  else
    json.partial! 'api/comments/comment', comment: comment.parent
  end

end
