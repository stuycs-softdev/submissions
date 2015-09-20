import random

def greeting():
    name = raw_input("Who are you?\n")
    greet(name)

def greet(name):
    greetings = ["Hello", "W'sup?", "My name is Inigo Montoya, you killed my father. Prepare to die.", "Good day,", "Greetings", "How do you do?"] 
    x = random.randint(0,5);
    print greetings[x] + " " + name
    
greeting()
