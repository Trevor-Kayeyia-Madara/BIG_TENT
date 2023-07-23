# Find or create admin 1
admin1 = Admin.find_by(username: 'trevor')
if admin1
  admin1.password = 'trev123'  # Replace 'new_password' with the desired new password
  admin1.save!
  puts "Admin 1 password changed. New password: #{admin1.password}"
else
  admin1 = Admin.create!(username: 'trevor', password: 'trev123')
  puts "Admin 1 created with username: #{admin1.username} and password: #{admin1.password}"
end

# Find or create admin 2
admin2 = Admin.find_by(username: 'romen')
if admin2
  admin2.password = 'romen123@'  # Replace 'new_password' with the desired new password
  admin2.save!
  puts "Admin 2 password changed. New password: #{admin2.password}"
else
  admin2 = Admin.create!(username: 'romen', password: 'romen123@')
  puts "Admin 2 created with username: #{admin2.username} and password: #{admin2.password}"
end

puts "Create parking sections..."
park_a1= ParkSection.find_or_create_by(park_name: 'A',park_num: 'A1')
park_a2= ParkSection.find_or_create_by(park_name: 'A',park_num: 'A2')
park_a3= ParkSection.find_or_create_by(park_name: 'A',park_num: 'A3')
park_b1= ParkSection.find_or_create_by(park_name: 'B',park_num: 'B1')
park_b2= ParkSection.find_or_create_by(park_name: 'B',park_num: 'B2')
park_b3= ParkSection.find_or_create_by(park_name: 'B',park_num: 'B3')

puts "Parking sections created"