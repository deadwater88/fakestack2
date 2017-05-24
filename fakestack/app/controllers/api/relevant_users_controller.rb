class Api::RelevantUsersController < ApplicationController

  def index
    @user = User.find_by(id: params[:id])
    @users = User.all
    render :index
  end

end
