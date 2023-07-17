# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
ParkingSection.create(name: 'A', capacity: 100)
ParkingSection.create(name: 'B', capacity: 100)
ParkingSection.create(name: 'C', capacity: 200)
ParkingSection.create(name: 'D', capacity: 150)
ParkingSection.create(name: 'E', capacity: 150)
ParkingSection.create(name: 'F', capacity: 150)
ParkingSection.create(name: 'G', capacity: 150)


admin = Admin.create(username: 'Admin', password: 'bigtent23@254')

puts "Admin created with username: #{admin.username} and password: #{admin.password}"
