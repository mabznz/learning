#y = float(raw_input('Enter a number:'))
#print y

x = int(raw_input('Enter and integer: '))
if (x%2) == 0:
    print 'Even'
else:
    print 'Odd'
    if x%3 != 0:
        print "And not divisible by 3"
