json.extract!(user,
              :id,
              :first_name,
              :last_name,
              :email,
              :intro,
              :current_city,
              :hometown,
              :other_names,
              :favorite_quotes,
              :places,
              :profile_img_url,
              :cover_img_url,
              :biography,
              :friends)

json.schoolhistories do
  user.school_histories.each do |history|
    json.partial! 'api/schoolhistories/schoolhistory.json',  formats: [:json], schoolhistory: history
  end
end

json.friendscount user.friends.length
json.requesters user.requesters
json.recipients user.recipients

requests = user.requesters.dup
user.friends.each do |k, v|
  requests.delete(k)
end

json.requests requests.values
