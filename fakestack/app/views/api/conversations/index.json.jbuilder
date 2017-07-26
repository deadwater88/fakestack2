  @conversations.each do |conversation|
   json.set! conversation.id do
     json.merge! conversation.attributes
   end
 end
