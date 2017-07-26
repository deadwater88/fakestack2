module ApplicationCable
  class Channel < ActionCable::Channel::Base
    def current_user
      @user ||= User.find_by(session_token: session[:session_token])
    end
  end
end
