class Api::FriendingsController < ApplicationController

  def create
    @friending = Friending.new(friending_params)
    @friending.requester_id = current_user.id
    if @friending.save
      render json: {recipients: current_user.recipients.pluck(:id)}
    else
      render json: ['Failed to Add Friend'], status: 400
    end
  end

  def update
    @friending = Friending.find_by(requester_id: params[:friending][:requester_id], recipient_id: current_user.id)
    if @friending.update_attributes(friending_params)
      render json: {friends: current_user.friends.map {|friend| friend.id}}
    else
      render json: ["Failed to Accept Friend Request"], status: 400
    end
  end

  def destroy
    @friending = Friending.find_by(recipient_id: current_user, requester_id: params[:id])
    @friending.destroy if @friending
    @friending = Friending.find_by(recipient_id: params[:id], requester_id: current_user)
    @friending.destroy if @friending
    @user = current_user
      render 'api/users/show'
  end

  private

  def friending_params
    params.require(:friending).permit(:requester_id, :recipient_id, :approved)
  end

end
