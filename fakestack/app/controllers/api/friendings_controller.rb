class Api::FriendingsController < ApplicationController

  def create
    @friending = Friending.new(friending_params)
    @friending.requester_id = current_user.id
    if @friending.save
      @recipients = Friending.create_friending(current_user, friending_params[:recipient_id])
      render 'api/friendings/_recipients.json'
    else
      render json: ['Failed to Add Friend'], status: 400
    end
  end

  def update
    @friending = Friending.find_by(requester_id: params[:friending][:requester_id], recipient_id: current_user.id)
    if @friending.update_attributes(friending_params)
      @friends = current_user.friends
      Friending.approve_friends(current_user.id, params[:friending][:requester_id])
      @user = current_user
      render 'api/users/show'
    else
      render json: ["Failed to Accept Friend Request"], status: 400
    end
  end

  def destroy
    @friending = Friending.find_by(recipient_id: current_user, requester_id: params[:id])
    @friending.destroy if @friending
    @friending = Friending.find_by(recipient_id: params[:id], requester_id: current_user)
    @friending.destroy if @friending
    other_user = User.find_by(id: params[:id])
    other_user.remove_friend(current_user)
    current_user.remove_friend(other_user)
    @user = current_user
    render 'api/users/show'
  end

  private

  def friending_params
    params.require(:friending).permit(:requester_id, :recipient_id, :approved)
  end

end
