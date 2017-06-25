
  json.extract!(comment,
                 :id,
                 :author_id,
                 :parent_id,
                 :created_at,
                 :updated_at,
                 :content,
                 :parent_type)
  json.author do
    json.partial! 'api/users/liteuser.json', user: comment.author
  end
  json.replies comment.replies.map do |reply|
    json.extract!(reply,
                  :id,
                  :author_id,
                  :parent_id,
                  :created_at,
                  :updated_at,
                  :content,
                  :parent_type)
    json.set! :author do
      json.set! :author do
        json.partial! 'api/users/liteuser.json', user: reply.author
      end
    end
  end

json.parent do

  if comment.parent_type == "Post"
    json.partial! 'api/posts/post', post: comment.parent
  else
    json.partial! 'api/comments/comment', comment: comment.parent
  end

end
