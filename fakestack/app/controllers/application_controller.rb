class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user

  def current_user
    user = User.find_by(session_token: session[:session_token])
  end

  def login
    session[:session_token] = @user.session_token
  end

  def logout
    @user.reset_token if current_user
    session[:session_token] = nil
  end
end
