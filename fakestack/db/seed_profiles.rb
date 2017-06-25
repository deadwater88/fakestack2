require 'net/http'
require 'byebug'
require 'json'
require 'faker'
require_relative './generateProfiles/getQuotes.rb'
require_relative './generateProfiles/getPexel.rb'

puts "Fetching Profiles..."
url = URI.parse('https://randomuser.me/api/?results=1000')
req = Net::HTTP::Get.new(url.to_s)
res = Net::HTTP.start(url.host, url.port, use_ssl: url.scheme == 'https') {|http|
  http.request(req)
}
puts "Profiles retrieved"
#
profiles = JSON.parse(res.body)['results']
# puts "Fetching quotes..."
# quotes = getQuotes
# puts "quotes retrieved"
# puts "Fetching Cover Images..."
# cover_images = getPexel
# puts "Cover Images retrieved"

quotes = JSON.parse(File.read('./db/generateProfiles/quotes.txt'))
cover_images = JSON.parse(File.read('./db/generateProfiles/cover_urls.txt'))

puts "seeding..."
profiles.each_with_index do |profile, index|
  hometown = Faker::Address.city
  first_name = profile['name']['first']
  User.create(email: profile['email'],
              password: 'password',
              first_name: first_name,
              last_name: profile['name']['last'],
              profile_img_url: profile['picture']['large'],
              current_city: profile['location']['city'],
              intro: "My name is #{first_name}. I'm from #{hometown} and my favorite food is #{Faker::Food.ingredient}.",
              hometown: hometown,
              favorite_quotes: quotes[index],
              biography: "",
              cover_img_url: cover_images[index])
end
