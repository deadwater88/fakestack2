@users.each do |user|
  json.set! user.id do
    json.partial! 'api/users/liteuser.json', user: user
  end
end
