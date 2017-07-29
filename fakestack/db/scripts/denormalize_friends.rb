User.all.each do |user|
  friends = {}
  user.friendslist.each do |friend|
    friendhash = {}
    friendhash[:id] = friend.id
    friendhash[:first_name] = friend.first_name
    friendhash[:last_name] = friend.last_name
    friendhash[:profile_img_url] = friend.profile_img_url
    friends[friend.id] = friendhash
  end

  user.friends = friends
  user.save
end
