class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user
      if @user.update_attributes(user_params)
        render :show
      else
        render json: @user.errors.full_messages, status: 400
      end
    else
      render json: ["User could not be found"], status: 404
    end
  end

  def user_params
    params.require(:user).permit(
     :id,
     :email,
     :password,
     :first_name,
     :last_name,
     :profile_img_url,
     :intro,
     :hometown,
     :current_city,
     :places,
     :biography,
     :cover_img_url,
      favorite_quotes: [],
      other_names: [])
  end

end
