admin1 = Admin.create(username: 'Admin1', password: '123')
admin2 = Admin.create(username: 'Admin2', password: 'abc')

puts "Admin 1 created with username: #{admin1.username} and password: #{admin1.password}"
puts "Admin 2 created with username: #{admin2.username} and password: #{admin2.password}"
