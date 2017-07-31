
rocks = %w'Cerie_Xerox Jack_Donaghy Liz_Lemon Jenna_Maroney Tracy_Jordan Kenneth_Parcell Frank_Rossitano Pete_Hornberger Devon_Banks'
users = []
rocks.each do |name|
  first_name, last_name = name.split("_")
  user = User.find_by(last_name: last_name)
  users.push(user)
end

users.each do |user1|
  users.each do |user2|
    Friending.create(requester_id: user1.id, recipient_id: user2.id, approved: true)
  end
end

liz = User.find_by(first_name: "Liz")

liz.profile_img_url = "https://cdn.pastemagazine.com/www/blogs/lists/lizlemonthumbs.jpg"
liz.intro = "I've only been rejected once by someone who went to clown college."
liz.hometown = "White Haven"
liz.current_city = "New York City"
liz.other_names = ["Lemon", "Biju", "LL", "Dummy", "Liz Lemon Cool J," "Li Lem", "Beth", "Lizzy", "The Lizard", "Blizzard", "Liz Zitrone", "Menta-Liz", "El Tejón", "Super Virgin", "The Blocker", "Elizabeth Donaghy",
                  "Lesbian Yellow Sour Fruit", "Shark Eyes", "Lisa Lampanelli", "Lem Lizon", "Elizabart"]
liz.favorite_quotes = "“You know what Mr. Bag? I will have a nice day! I”m gonna hang you in my kitchen! And fill you with other bags! YOU WILL EAT YOUR FAMILY!”"
liz.cover_img_url = "http://cdn3.thr.com/sites/default/files/imagecache/scale_crop_768_433/2011/08/30rock_a_0.jpg"
liz.biography = 'New York third-wave feminist, college educated, single and pretending to be happy about it, over scheduled, undersexed, you buy any magazine that says "healthy body image" on the cover, and every two years you take up knitting for... a week.'
liz.save

jack = User.find_by(last_name: "Donaghy")
jack.profile_img_url = ""
jack.intro = "I'm Jack Donaghy. New VP of development for NBC/GE/Universal/Kmart"
jack.save


jenna = User.find_by(last_name: "Maroney")
jenna.intro = "I love cats. I used to have two cats. Bu then I moved to this place with hardwood floors, so we had to put them down"
jenna.current_city = "New York City"

tracy = User.find_by(last_name: "Jordan")
tracy.intro = "I am a Jedi! I am a Jedi! I am a Jedi!"
tracy.biography = "I wanna drop truth bombs. You know how pissed off I was when Us Weekly said I was on crack? That's racist! I'm not on crack, I'm straight up mentally ill!"
tracy.favorite_quotes ="The important thing to remember is that he was never charge with a crime."

jenna.save
tracy.save

pete = user.find_by(last_name: "Hornberger")
pete.profile_img_url = "https://www.famousbirthdays.com/headshots/scott-adsit-1.jpg"
