redis_url = ENV['REDIS_URL']
local_redis = 'redis://127.0.0.1:6379/0'

Sidekiq.configure_server do |config|
  config.redis = { url: redis_url, size: 30 }
end

Sidekiq.configure_client do |config|
  config.redis = { url: redis_url, size: 30 }
end
