num_terms = 10 #int(raw_input('Enter Number of Term Periods:'))
start_value = float(raw_input('Enter Starting Value:'))
percentage = float(raw_input('Enter Percentage Increase:'))
percentage = percentage / 100 + 1
for i in range(1, num_terms + 1):
    print "After %d terms at %f the value is %f." % (i, percentage, start_value)
    start_value = start_value * percentage
