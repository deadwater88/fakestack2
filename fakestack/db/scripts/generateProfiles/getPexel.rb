require 'net/http'
require 'json'


def parse_quote(quote)
  "\"#{quote['quote']}\" -#{quote['author']}"
end


def getPexel()
  results = []
  25.times do
    page = rand(1000)
    url = URI.parse("http://api.pexels.com/v1/popular?per_page=40&page=#{page}")
    req = Net::HTTP::Get.new(url.to_s)
    req['Authorization'] = '563492ad6f9170000100000155c9cc8f281148c27d9cfef9e772f862'
    req['Accept'] = 'application/json'
    res = Net::HTTP.start(url.host, url.port, use_ssl: url.scheme == 'https') {|http|
      http.request(req)
    }
    photos = JSON.parse(res.body)['photos']
    photos.each do |photo|
      results.push(photo['src']['landscape'])
    end
    puts "#{results.length} pexel urls fetched"
    sleep(3)
  end
  results
  File.write('./db/generateProfiles/cover_urls.txt', results)

end
