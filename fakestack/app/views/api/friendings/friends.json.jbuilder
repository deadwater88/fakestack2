
json.friends do
  @friends.each do |user_id, user|
    json.set! user_id do
      json.set! :id, user_id
      json.set! :first_name, user.first_name
      json.set! :last_name, user.last_name
      json.set! :profile_img_url, user.profile_img_url
    end
  end
end
