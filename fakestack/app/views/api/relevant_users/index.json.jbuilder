@users.each do |user|
  user = user.deep_symbolize_keys
  json.set! user[:id] do
    json.extract! user, :id, :first_name, :last_name, :profile_img_url
  end
end
