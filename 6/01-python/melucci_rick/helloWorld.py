#Rick Melucci, Period 6 Software Development

#Hello! This is my first time trying
#to write python code in 2 years, so bear with me!

print "\nHello! So this was kind of a playground type thing for me where I tried stuff out until it worked"
print "I tested myself on basics like variables, while loops, functions and booleans\n"
print "It'll probably make a lot more sense once you look at the code if you're just running this!"
print "\n ----------------------"
#Setting variables without declaring is pretty cool :)
hello = "Hello World!"
print "#testing my knowledge on variables and printing:"
print hello + "\n -----------------------"
#looks like I still remember how to print stuff!


#let's try some booleans!
print "#trying some boolean stuffs:"
isSoftDevAwesome = True

if isSoftDevAwesome:
    print "woo SoftDev is awesome!!" + "\n -----------------------"

else:
    print "boo soft dev is awesome :P" + "\n -----------------------"



#let's try to make a function
print "#testing some function thangs:"
def helloWorld():
    x = 10;
    myList = []
    while x > 0:
        myList.append(x)
        x = x - 1
    print myList[0:]
    return "yeees the function worked!"

print helloWorld() + "\n -----------------------"

print "yay I kinda do remember python after all!"
