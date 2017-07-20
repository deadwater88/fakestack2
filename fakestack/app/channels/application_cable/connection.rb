module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def session
      cookies.encrypted[Rails.application.config.session_options[:key]]
    end

    def connect
      self.current_user = current_user
      reject_unauthorized_connection unless current_user
    end

    def current_user
      user = User.find_by(session_token: session['session_token'])
    end


  end
end
