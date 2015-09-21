import random

#print "hello"

suit = ["Diamonds", "Clubs", "Hearts", "Spades"]
number = []

for i in xrange(0, 13):
    number.append(i)

rSuit = random.randint(0, 3)
rNum = random.randint(1, 13)
s = ""

if(rNum > 10 or rNum == 1):
    if(rNum == 11):
      s = "Jack"
    elif(rNum == 12):
        s = "Queen"
    elif(rNum == 1):
        s = "Ace"
    else:
        s = "King"
    print s,
else:
    print rNum,

print "of " + suit[rSuit]
