class Api::RelevantUsersController < ApplicationController

  def index
    @users = User.all
    render :index
  end

end
