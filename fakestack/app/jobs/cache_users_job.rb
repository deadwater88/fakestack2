class CacheUsersJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # Do something later
    all_users = []
    User.all.each do |user|
      user_object = {}
      user_object.email = user.email
      user_object.first_name = user.first_name
      user_object.last_name = user.last_name
      user_object.profile_img_url = user.profile_img_url
      user_object.intro = user.intro
      user_object.hometown = user.hometown
      user_object.current_city = user.current_city
      user_object.other_names = user.other_names
      user_object.favorite_quotes = user.favorite_quotes
      user_object.places = user.places
      user_object.cover_img_url = user.cover_img_url
      user_object.biography = user.biography
      all_users.push(user)
    end
    Redis.new.set("all_users", all_users.to_json)
    # Do something
  end
end
