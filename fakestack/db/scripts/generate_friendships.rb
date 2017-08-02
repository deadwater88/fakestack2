users = User.all.pluck(:id);
max = users.length - 1

cases = 0
count = 0
users.each do |id1|
  rand(90..120).times do
    friend_id = users[rand(max)]
    Friending.create(recipient_id: id1, requester_id: friend_id, approved: true)
    cases += 1
  end
  rand(10..15).times do
    friend_id = users[rand(max)]
    Friending.create(recipient_id: id1, requester_id: friend_id, approved: false)
    cases += 1
    puts "#{cases} cases processed" if cases % 500 == 0
  end
end
