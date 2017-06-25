class Api::RelevantUsersController < ApplicationController
  def index
    @users = []
    # @users = User.all.includes(:requesters).includes(:recipients)
    render :index
  end
end
