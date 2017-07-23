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
json.requesters do
  user.requesters.each do |requester|
    json.set! requester.id do
      json.partial! 'api/users/liteuser.json', user: requester
    end
  end
end

json.recipients do
  user.recipients.each do |recipient|
    json.set! recipient.id do
      json.partial! 'api/users/liteuser.json', user: recipient
    end
  end
end
json.requests(user.requesters.pluck(:id) - user.friends.keys)
