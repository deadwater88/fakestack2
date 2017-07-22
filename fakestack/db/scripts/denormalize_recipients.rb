User.all.each do |user|
  recipients = {}
  user._recipients.each do |friend|
    recipient = {}
    recipient[:id] = friend.id
    recipient[:firstName] = friend.first_name
    recipient[:lastName] = friend.last_name
    recipient[:profileImgUrl] = friend.profile_img_url
    recipients[friend.id] = recipient
  end

  user.recipients = recipients
  user.save
end
