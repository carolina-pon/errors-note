spanish = {one: "uno", two: "dos", three: "tres"}
spanish.each do |key, value|
  puts "'#{key}'はスペイン語で'#{value}'"
end

person1 = {first: "lina", last: "nagata"}
person2 = {first: "taiga", last: "kyomoto"}
person3 = {first: "kinikun", last: "nakayama"}
params = {}
puts params[:father] = person1
puts params[:mother] = person2
puts params[:child] = person3

puts params[:father]
puts params[:mother]
puts params[:child]

def ramdom_pass
  puts ('a'..'z').to_a.shuffle[0..15].join
end

user = {name: "lina", email: "lina@example.com", password: "#{ramdom_pass}"}
puts user
