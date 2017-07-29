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
              :biography)

json.friendscount user.friends.length
json.schoolhistories do
  user.school_histories.each do |history|
    json.partial! 'api/schoolhistories/schoolhistory.json',  formats: [:json], schoolhistory: history
  end
end

json.partial! 'api/friendings/friends.json',  formats: [:json], friends: user.friends
json.partial! 'api/friendings/requesters.json',  formats: [:json], requesters: user.requesters
json.partial! 'api/friendings/recipients.json',  formats: [:json], recipients: user.recipients



requests = user.requesters.dup.deep_symbolize_keys
user.friends.each do |k, v|
  requests.delete(k.to_sym)
end

json.partial! 'api/friendings/requests.json',  formats: [:json], requests: requests
