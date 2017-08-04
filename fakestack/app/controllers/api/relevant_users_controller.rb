class Api::RelevantUsersController < ApplicationController

  include Api::SearchHelper

  def index
    query = params[:query].downcase
    all_users = JSON.parse(Redis.new.get("all_users"))
    regex = Regexp.new(query, "i")
    @users = all_users.values.select do |user|
      regex.match(user['first_name']) || regex.match(user['last_name'])
    end
    # @users = User.all.includes(:requesters).includes(:recipients)
    render :index
  end

  def index_Query
    debugger
    query = params[:query].downcase
    @users = User.where("lower(first_name) LIKE ? OR lower(last_name) LIKE ?", "%#{query}%", "%#{query}%").limit(15).order(:last_name)
    @users ||= []
    # @users = User.all.includes(:requesters).includes(:recipients)
    render :index
  end



end
