import random

def WaysToDie():
    list = ["offer your hot dog to a snake", "poke a bear in the stomach", "drive in front of a train", \
    "pull your toast out with a fork", "wear a moose mask during hunting season", "disturb a massive bee colony", \
    "set your hair on fire", "run alongside the pool", "dance in a lake full of pirahnas", "lick the north pole", \
    "take your helmet off in space", "play hockey with a landmine"]
    name = raw_input("What is your name?\n")
    while name == "":
        name = raw_input("That is not a valid name. What is your name?\n")
    response = raw_input("Would you like a suggestion on how to not die? Y or N\n")
    while response == "Y" or response == "":
        while response == "Y":
            index = random.randint(0,11)
            response = raw_input(name + ", don't " + list[index] + ". Would you like another suggestion? Y or N\n")
        if response == "":
            response = raw_input("Do you want a suggestion or not? Y or N\n")
    index = random.randint(0,11)
    print "Fine. I'll predict your death then. You'll " + list[index] + " and die."
        
WaysToDie()def WaysToDie():
    name = raw_input("What is your name?")

WaysToDie()
