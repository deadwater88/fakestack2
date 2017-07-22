User.all.each do |user|
  requesters = {}
  user._requesters.each do |friend|
    requester = {}
    requester[:id] = friend.id
    requester[:firstName] = friend.first_name
    requester[:lastName] = friend.last_name
    requester[:profileImgUrl] = friend.profile_img_url
    requesters[friend.id] = requester
  end

  user.requesters = requesters
  user.save
end
