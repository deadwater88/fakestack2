User.all.each do |user|
  friends = {}
  user.friendslist.each do |friend|
    friendhash = {}
    friendhash[:id] = friend.id
    friendhash[:firstName] = friend.first_name
    friendhash[:lastName] = friend.last_name
    friendhash[:profileImgUrl] = friend.profile_img_url
    friends[friend.id] = friendhash
  end

  user.friends = friends
  user.save
end
