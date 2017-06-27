users = User.all.pluck(:id);


cases = 0
count = 0
users.each do |id1|
  users.each_with_index do |id2, idx|
    scenario = rand(50)
    case (scenario)
    when 0
      Friending.create(recipient_id: id2, requester_id: id1)
    when 1
      Friending.create(recipient_id: id1, requester_id: id2)
    when 2..7
      Friending.create(recipient_id: id1, requester_id: id2, approved: true)
      count += 1
    end
    cases += 1
    puts "#{cases} cases processed" if cases % 100 == 0
    puts "#{count} friendships created" if count % 100 == 0
  end
end
