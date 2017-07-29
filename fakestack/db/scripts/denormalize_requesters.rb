User.all.each do |user|
  requesters = {}
  user._requesters.each do |friend|
    requester = {}
    requester[:id] = friend.id
    requester[:first_name] = friend.first_name
    requester[:last_name] = friend.last_name
    requester[:profile_img_url] = friend.profile_img_url
    requesters[friend.id] = requester
  end

  user.requesters = requesters
  user.save
end
