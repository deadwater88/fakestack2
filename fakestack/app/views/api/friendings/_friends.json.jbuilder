
json.friends({})
json.friends do
  friends.deep_symbolize_keys.each do |k, v|
    json.set! k do
      json.extract! v, :id, :first_name, :last_name, :profile_img_url
    end
  end
end
