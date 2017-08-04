def update_all_users
  users = {}
  User.all.each do |user|
    userhash = {}
    userhash[:id] = user.id
    userhash[:first_name] = user.first_name
    userhash[:last_name] = user.last_name
    userhash[:profile_img_url] = user.profile_img_url
    users[user.id] = userhash
    user.save
  end
  r = Redis.new.set("all_users", users.to_json)
end
