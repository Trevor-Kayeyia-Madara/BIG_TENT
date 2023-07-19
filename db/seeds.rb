# Find or create admin 1
admin1 = Admin.find_by(username: 'trevor')
unless admin1
  admin1 = Admin.create!(username: 'trevor', password: 'trev123')
  puts "Admin 1 created with username: #{admin1.username} and password: #{admin1.password}"
else
  puts "Admin 1 already exists with username: #{admin1.username}"
end

# Find or create admin 2
admin2 = Admin.find_by(username: 'romen')
unless admin2
  admin2 = Admin.create!(username: 'romen', password: 'romen123@')
  puts "Admin 2 created with username: #{admin2.username} and password: #{admin2.password}"
else
  puts "Admin 2 already exists with username: #{admin2.username}"
end
