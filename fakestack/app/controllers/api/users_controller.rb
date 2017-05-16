class Api::UsersController < ApplicationController

  def show
    @user = User.find_by(id: params[:id])
  end

  def create
    @user = User.new(user_params)
    debugger
    if @user.save
      login
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def update
    @user = User.find_by(user_params[:id])
    if @user.update_attributes(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 400
    end
  end

  def user_params
    params.require(:user).permit(:id, :email, :password, :first_name, :last_name)
  end

end
