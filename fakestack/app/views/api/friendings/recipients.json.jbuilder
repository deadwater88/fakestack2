
json.recipients do
  @recipients.values.each do |user|
    json.set! user[:id] do
      json.set! :id, user[:id]
      json.set! :first_name, user[:first_name]
      json.set! :last_name, user[:last_name]
      json.set! :profile_img_url, user[:profile_img_url]
    end
  end
end
