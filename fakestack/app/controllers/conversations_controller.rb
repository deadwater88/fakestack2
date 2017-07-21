class ConversationsController < ApplicationController

  def create
  end

  def show
    other_id = params[:other_id]
    current_id = current_user.id
    c1 = Conversation.find_by(participant1_id: current_id, participant2_id: other_id)
    c2 = Conversation.find_by(participant2_id: current_id, participant1_id: other_id)
    @conversation = c1 || c2

  end



end
