#for count in range(1,101):
#    if (count % 3 == 0) and (count % 5 == 0):
#        print 'fizzbuzz' + str(count)
#    elif (count % 3 == 0):
#        print 'fizz' + str(count)
#    elif (count % 5 == 0):
#        print 'buzz' + str(count)

for count in range(1,101):
    s = str(count)
    if (count % 3 == 0) or (count % 5 == 0):
        s = ''
        if (count % 3 == 0):
            s = s + 'Fizz'
        if (count % 5 == 0):
            s = s + 'Buzz'
    print s
