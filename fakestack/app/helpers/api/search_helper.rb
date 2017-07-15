module Api::SearchHelper

  def edit_distance(s1, s2)
    s1 = s1.downcase
    s2 = s2.downcase
    m = Array.new(s2.length + 1){|i| [i]}
    m[0] = (0..s1.length).to_a
    p m
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

  def search(query)
    query = query.split(/\s*/)
    if query.length == 2
      first_name = query[0]
      last_name = query[1]
      return first_last_search(first_name, last_name)
    else
      return single_search(query)
    end
  end

  def first_last_search(first, last)
    all_users = JSON.parse(Redis.new.get("all_users"))
    all_users.sort_by do |user|
      ed1 = edit_distance(user.first_name, first)
      ed2 = edit_distance(user.last_name, last)
      ed1 + ed2
    end
    all_users[0..15]
  end

  def single_search(query)
    all_users = JSON.parse(Redis.new.get("all_users"))
    all_users.sort_by do |user|
      ed1 = edit_distance(user.first_name, query)
      ed2 = edit_distance(user.last_name, query)
      [ed1, ed2].min
    end
    all_users[0..15]
  end

end
