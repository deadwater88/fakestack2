require 'date'

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
    current_user.reset_token if current_user
    session[:session_token] = nil
  end

  def set_s3_direct_post(filename, filetype)
    @s3_direct_post = S3_BUCKET.presigned_post(key: "uploads/#{SecureRandom.uuid}/#{filename}",
                                               success_action_status: '201',
                                               acl: 'public-read',
                                               expires: DateTime.now + 120.seconds,
                                               content_type: filetype)
  end

end
