name = 'Byron J. Mabbett'
age = 42 # not a lie
height = 170 # cm's
weight = 79 # kilos
eyes = 'Blue'
teeth = 'White'
hair = 'Blonde'

print "Let's talk about %r." % name
print "He's %r cm's tall. That's %f inches" % (height, height * 0.393701)
print "He's %d kilos heavy. That's %f pounds" % (weight, weight * 2.20462)
print "Actually that's not too heavy."
print "He's got %s eyes and %s hair." % (eyes, hair)
print "His teeth are usually %s depending on the coffee." % teeth

print "If I add %d, %d, and %d I get %d." % (age, height, weight, age + height + weight )
