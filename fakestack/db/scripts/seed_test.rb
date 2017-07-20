require 'net/http'
require 'json'
require_relative './generateProfiles/getQuotes.rb'
require_relative './generateProfiles/getPexel.rb'


url = URI.parse('https://randomuser.me/api/?results=10')
req = Net::HTTP::Get.new(url.to_s)

res = Net::HTTP.start(url.host, url.port, use_ssl: url.scheme == 'https') {|http|
  http.request(req)
}
puts "Profiles retrieved"
#
profiles = JSON.parse(res.body)['results']
debugger

puts "shit"
