class Api::ConversationsController < ApplicationController

  def index
    @conversations = current_user.conversations;
    render :index
  end

end
