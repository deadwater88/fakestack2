class ChatChannel < ApplicationCable::Channel
  def subscribed
    broadcasting = "chat_#{params[:room]}"
    stream_from broadcasting
  end


end
