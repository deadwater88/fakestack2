class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login
      render :show
    else
      render json: { login:{ errors: ["Incorrect Password"] } }, status: 400
    end
  end

  def destroy
    logout
    render json: { current_user: nil, errors: {} }
  end
end
