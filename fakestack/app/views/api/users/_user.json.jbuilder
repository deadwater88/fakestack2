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


json.friends (user.friends.map{|friend| friend.id})
json.requesters user.requesters.pluck(:id)
json.recipients user.recipients.pluck(:id)

json.requests (user.requesters.pluck(:id) - user.friends.map{|friend| friend.id } )
