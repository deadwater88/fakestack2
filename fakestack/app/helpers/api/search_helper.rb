module Api::SearchHelper

  def update_all_users
    users = {}
    User.all.each do |user|
      userhash = {}
      userhash[:id] = user.id
      userhash[:first_name] = user.first_name
      userhash[:last_name] = user.last_name
      userhash[:profile_img_url] = user.profile_img_url
      users[user.id] = userhash
    end
    r = Redis.new.set("all_users", users.to_json)
  end

  def search(query)
    query = query.split(/\s+/)
    if query.length == 2
      first_name = query[0]
      last_name = query[1]
      return first_last_search(first_name, last_name)
    else
      return single_search(query[0])
    end
  end

  def edit_distance(s1, s2)
    s1 = s1.downcase
    s2 = s2.downcase
    m = Array.new(s2.length + 1){|i| [i]}
    m[0] = (0..s1.length).to_a
    (1..s2.length).each do |i|
      (1..s1.length).each do |j|
        if s2[i-1] == s1[j - 1]
          m[i][j] = m[i - 1][j - 1]
        else
          min = [m[i-1][j-1], m[i][j - 1], m[i - 1][j]].min
          m[i][j] = min + 1
        end
      end
    end
    m[-1][-1]
  end


  def first_last_search(first, last)
    all_users = JSON.parse(Redis.new.get("all_users"))
    sorted = all_users.values.sort_by do |user|
      ed1 = edit_distance(user['first_name'], first)
      ed2 = edit_distance(user['last_name'], last)
      score = ed1 + ed2
      user['score'] = score
    end
    sorted[0..15].select{|user| user['score'] < 5}
  end

  def single_search(query)
    all_users = JSON.parse(Redis.new.get("all_users"))
    sorted = all_users.values.sort_by do |user|
      ed1 = edit_distance(user['first_name'], query)
      ed2 = edit_distance(user['last_name'], query)
      score = [ed1, ed2].min
      user['score'] = score
    end
    sorted[0..15].select{|user| user['score'] < 5}
  end

end
