require 'net/http'


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# User.destroy_all
# users = [User.create(email:"David@gmail.com", password: "password", first_name: "David", last_name: "Wong"),
# User.create(email:"Vader@gmail.com", password: "password", first_name: "Darth Vader", last_name: "Skywalker"),
# User.create(email:"Kenobi@gmail.com", password: "password", first_name: "Ben", last_name: "Kenobi"),
# User.create(email: "Tigh@gmail.com", password: "password", first_name: "Saul", last_name: "Tigh"),
# User.create(email: 'Sanchez@gmail.com', password: "password", first_name: "Rick", last_name: "Sanchez"),
# User.create(email: 'Smith@gmail.com', password: 'password', first_name: 'Morty', last_name: 'Smith'),
# User.create(email: 'Potter@gmail.com', password: 'password', first_name: 'Harry', last_name: 'Potter'),
# User.create(email: 'Bond@gmail.com', password: 'password', first_name: 'James', last_name: 'Bond'),
# User.create(email: 'Geller@gmail.com', password: 'password', first_name: 'Ross', last_name: 'Geller'),
# User.create(email: 'Strife@gmail.com', password: 'password', first_name: 'Cloud', last_name: 'Strife'),
# User.create(email: 'Janeway@gmail.com', password: 'password', first_name: 'Kathryn', last_name: 'Janeway'),
# User.create(email: 'Torres@gmail.com', password: 'password', first_name: 'B\'Elanna', last_name: 'Torres'),
# User.create(email: 'Birdman@gmail.com', password: 'password', first_name: 'Bird', last_name: 'Man'),
# User.create(email: 'Nerys@gmail.com', password: 'password', first_name: 'Kira', last_name: 'Nerys'),
# User.create(email: 'Odo@gmail.com', password: 'password', first_name: 'None', last_name: 'Odo'),
# User.create(email: 'Wayne@gmail.com', password: 'password', first_name: 'Bruce', last_name: 'Wayne'),
# User.create(email: 'Wilson@gmail.com', password: 'password', first_name: 'Wade', last_name: 'Wilson'),
# User.create(email: 'Garak@gmail.com', password: 'password', first_name: 'Elim', last_name: 'Garak'),
# User.create(email: 'Snow@gmail.com', password: 'password', first_name: 'Jon', last_name: 'Snow'),
# User.create(email: 'Solo@gmail.com', password: 'password', first_name: 'Han', last_name: 'Solo'),
# User.create(email: 'Solid@gmail.com', password: 'password', first_name: 'Solid', last_name: 'Snake'),
# User.create(email: 'Liquid@gmail.com', password: 'password', first_name: 'Liquid', last_name: 'Snake'),
# User.create(email: 'Campbell@gmail.com', password: 'password', first_name: 'Roy', last_name: 'Campbell'),
# User.create(email: 'Archer@gmail.com', password: 'password', first_name: 'Sterling', last_name: 'Archer'),
# User.create(email: 'Saitama@gmail.com', password: 'password', first_name: 'Caped Baldy', last_name: 'Saitama'),
# User.create(email: 'Picard@gmail.com', password: 'password', first_name: 'Jean Luc', last_name: 'Picard'),
# User.create(email: 'Rosie@gmail.com', password: 'password', first_name: 'Rosie', last_name: 'Jetson'),
# User.create(email: 'Scooby@gmail.com', password: 'password', first_name: 'Scooby', last_name: 'Doo'),
# User.create(email: 'Finn@gmail.com', password: 'password', first_name: 'Finn', last_name: 'The Human'),
# User.create(email: 'Jake@gmail.com', password: 'password', first_name: 'Jake', last_name: 'The Dog'),
# User.create(email: 'Skywalker@gmail.com', password: 'password', first_name: 'Luke', last_name: 'SkyWalker'),
# User.create(email: 'Targaryen@gmail.com', password: 'password', first_name: 'Daenerys', last_name: 'Targaryen'),
# User.create(email: 'Gaiman@gmail.com', password: 'password', first_name: 'Neil', last_name: 'Gaiman'),
# User.create(email: 'Obrien@gmail.com', password: 'password', first_name: 'Conan', last_name: 'Obrien'),
# User.create(email: 'sColbert@gmail.com', password: 'password', first_name: 'Stephen', last_name: 'Colbert'),
# User.create(email: 'Pham@gmail.com', password: 'password', first_name: 'Vu', last_name: 'Pham'),
# User.create(email: 'Wilborn@gmail.com', password: 'password', first_name: 'Robin F.', last_name: 'Wilborn'),
# User.create(email: 'Manning@gmail.com', password: 'password', first_name: 'Sam Faber', last_name: 'Manning'),
# User.create(email: 'Wang@gmail.com', password: 'password', first_name: 'Tony', last_name: 'Wang'),
# User.create(email: 'azuolas@gmail.com', password: 'password', first_name: 'mark', last_name: 'azuolas'),
# User.create(email: 'Lee@gmail.com', password: 'password', first_name: 'Yura', last_name: 'Lee'),
# User.create(email: 'Chui@gmail.com', password: 'password', first_name: 'Brandon', last_name: 'Chui'),
# User.create(email: 'Xu@gmail.com', password: 'password', first_name: 'Winber', last_name: 'Xu'),
# User.create(email: 'Bullen@gmail.com', password: 'password', first_name: 'Alex', last_name: 'Bullen'),
# User.create(email: 'Hoffamn@gmail.com', password: 'password', first_name: 'Ian', last_name: 'Hoffman'),
# User.create(email: 'Wanroy@gmail.com', password: 'password', first_name: 'Hope', last_name: 'Wanroy'),
# User.create(email: 'Gillespie@gmail.com', password: 'password', first_name: 'Chris', last_name: 'Gillespie'),
# User.create(email: 'Reyes@gmail.com', password: 'password', first_name: 'Ranelle', last_name: 'Reyes'),
# User.create(email: 'Dobrynin@gmail.com', password: 'password', first_name: 'David', last_name: 'Dobrynin'),
# User.create(email: 'Li@gmail.com', password: 'password', first_name: 'Victor', last_name: 'Li'),
# User.create(email: 'Cruz@gmail.com', password: 'password', first_name: 'Louis', last_name: 'Cruz')]





require_relative './scripts/seed_profiles.rb'
require_relative './scripts/generate_friendships.rb'
require_relative './scripts/denormalize_friends.rb'
require_relative './scripts/denormalize_recipients.rb'
require_relative './scripts/denormalize_requesters.rb'
