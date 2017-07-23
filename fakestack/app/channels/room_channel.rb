class RoomChannel < ApplicationCable::Channel
  def subscribed
     appear
     stream_from "listener_#{current_user.id}"
  end

  def unsubscribed
    away
    # Any cleanup needed when channel is unsubscribed
  end

  def appear
    id = current_user.id
    redis = Redis.new
    redis.set("#{id}", "true")
  end

  def away
    id = current_user.id
    redis = Redis.new
    redis.set("#{id}", "false")
  end

  def speak(data)
    listener_id = data['recipient_id']
    # ActionCable.server.broadcast "room_channel", message: data['message']
    conversation = Conversation.add_message_to_conversation(current_user.id, data)
    ActionCable.server.broadcast "listener_#{listener_id}", conversation
    ActionCable.server.broadcast "listener_#{current_user.id}", conversation
  end
  # data should have form of
  #  {recipient_id: 1234,
  #   message: {
  #     author_id: 345,
  #     content: "Hello!",
  #     timeStamp: "time"
  #     }}
  #   }
end
