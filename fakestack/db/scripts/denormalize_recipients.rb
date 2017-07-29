User.all.each do |user|
  recipients = {}
  user._recipients.each do |friend|
    recipient = {}
    recipient[:id] = friend.id
    recipient[:first_name] = friend.first_name
    recipient[:last_name] = friend.last_name
    recipient[:profile_img_url] = friend.profile_img_url
    recipients[friend.id] = recipient
  end

  user.recipients = recipients
  user.save
end
