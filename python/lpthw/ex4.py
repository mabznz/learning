# Assign the integer 100 to variable cars
cars = 100
# print type(cars)

# Assign the float 4.0 to variable space_in_a_car
space_in_a_car = 4.0

drivers = 30
passengers = 90

# Assign the result of subtracting drivers from cars to cars_not_driven
cars_not_driven = cars - drivers

# Assign the value of drivers to cars_driven
cars_driven = drivers

carpool_capacity = cars_driven * space_in_a_car
average_passengers_per_car = passengers / cars_driven

print "There are", cars, "cars available."
print "There are only", drivers, "drivers available."
print "There will be", cars_not_driven, "empty cars today."
print "We can transport", carpool_capacity, "people today."
print "We have", passengers, "to carpool today."
print "We need to put about", average_passengers_per_car, "in each car."
