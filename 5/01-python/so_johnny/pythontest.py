# Johnny So
# Period 5
# SoftDev

# What is Python? D:

import random

# Random Right Now (Na Na Na) by Akon Parody thing for Python

print "It's been so long"
print "That I haven't seen your logo, Python"
print "I'm tryna hold on"
print "But the memory I have is fadin awayyy"
print "It won't be long"
print "Before I remember how to code in you, Python"
print "And just code, code, code in you"
print "And make whatever's on my mind"
print "\n\n\n"

def Testing():
    q0 = "How do we define variables again?"
    a0 = "Don't know, but I don't think we have to declare them!"
    print q0
    print a0
    print "I think it worked!"
    print "Now how about loops...?"
    n = 0
    while n < 10:
        print n
        n = n+1
    print "Yay!"
    print "It worked"
    print "What now?"
    print "Time for some coding bat questions!"

#Python > Warmup-2 > string_times
def string_times(str, n):
  output = ""
  number = n
  while number > 0:
     output = output+str
     number = number - 1
  return output


#Run
Testing()
print string_times("IS IT WORKING?",2)
print string_times("YES IT IS!",3)
