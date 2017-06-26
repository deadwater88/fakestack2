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

json.schoolhistories do
  user.school_histories.each do |history|
    json.partial! 'api/schoolhistories/schoolhistory.json',  formats: [:json], schoolhistory: history
  end
end

json.friends do
  user.friends.each do |friend|
    json.set! friend.id do
      json.partial! 'api/users/liteuser.json', user: friend
    end
  end
end
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
json.requests (user.requesters.pluck(:id) - user.friends.map{|friend| friend.id } )
