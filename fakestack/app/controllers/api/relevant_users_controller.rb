class Api::RelevantUsersController < ApplicationController

  include Api::SearchHelper
  
  def index
    query = params[:user_id].downcase

  end

  def index
    query = params[:user_id].downcase
    @users = User.where("lower(first_name) LIKE ? OR lower(last_name) LIKE ?", "%#{query}%", "%#{query}%").limit(15).order(:last_name)
    @users ||= []
    # @users = User.all.includes(:requesters).includes(:recipients)
    render :index
  end



end
