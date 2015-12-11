import random
a = random.sample(range(100), 10)
for i in range(0, 10):
    number = input('Enter a number \nOr type -1 to do it the easy way \n')
    if number == -1:
        print 'Oh, alright, let\'s do this the easy way'
        break
        
    a[i] = number

print a
for x in range(0, 100):    
    decision = input('What should we do next? \n 1 - sort \n 2 - car \n 3 - cdr \n 4 - cons \n 5 - new list \n Type -1 to quit \n')

    if (decision == 1):
        print 'Let\'s use the magical powers of build in python sorting!'
        a = sorted(a)
        print a
    elif (decision == 2):
        print 'Here\'s your car sir:' + str(a[0])

    elif (decision == 3):
        'How cutting edge of you'
        a.pop(0)
        print a
    elif (decision == 4):
        newElement = input('What do you want to add?')
        a.insert(0, newElement)
        print a
    elif (decision == 5):
        print 'Randomizing...'
        a = random.sample(range(100), 10)
        print a
    elif (decision == -1):
        print 'Ah, getting sick of this?'
        break
    else:
        print 'Sorry that doesn\'t make sense'

        