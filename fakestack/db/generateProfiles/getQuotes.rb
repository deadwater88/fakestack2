require 'net/http'
require 'byebug'
require 'json'


def parse_quote(quote)
  "\"#{quote['quote']}\" -#{quote['author']}"
end


def getQuotes()
  url = URI.parse('https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=10')
  req = Net::HTTP::Get.new(url.to_s)
  req['X-Mashape-Key'] = 'MHAAvdeljZmshZhZ1Zs37DslKNtzp1BXRWljsntu77M9VWUZMF'
  req['Accept'] = 'application/json'
  results = []
  100.times do
    res = Net::HTTP.start(url.host, url.port, use_ssl: url.scheme == 'https') {|http|
      http.request(req)
    }
    quotes = JSON.parse(res.body)
    quotes.each do |quote|
      parsed = parse_quote(quote)
      results.push(parsed)
    end
    puts "#{results.length} quotes fetched"
    sleep(1)
  end

  results
  File.write('./db/generateProfiles/quotes.txt', results)
end
