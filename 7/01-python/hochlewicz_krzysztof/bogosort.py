#Bogosort

import random

randlist = []

def issorted():
    return randlist == sorted(randlist)

print("Welcome to Bogosort!")
print("Creating a list of 10 random numbers between 1 and 100...")
      
for i in range(8):
    randlist.append(random.randrange(100))

print randlist

if(issorted()):
    print("Your list is already sorted! Wow, this demo is useless now...")
else:
    raw_input("Your list isn't sorted yet. Hit enter to begin sorting it!")
    tries = 0
    while (not issorted()):
        tries += 1
        random.shuffle(randlist)
        print randlist
        if(issorted()):
            print("Your list was sorted with Bogosort! That only took " + str(tries) + " tries!")
        else:
            print("Haha, nope!")
    

