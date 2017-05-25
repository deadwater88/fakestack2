
json.comment do
  json.partial! 'comment', comment: @comment
end

if @comment.parent_type == "Post"
  json.post do
    json.partial! 'api/posts/post', post: @comment.parent
  end

else
  json.parent do
    json.partial! 'comment', comment: @comment.parent
  end
end
