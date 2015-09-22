from random import randrange

def playgame():
    Choices = ["Rock","Paper","Scissors","ROCK","PAPER","SCISSORS","rock","paper","scissors","R","P","S","r","p","s"]

    choosing = True
    user_input = 0
    while choosing:
        user_input = raw_input("Rock(r), Paper(p), or Scissors(s): ")
        
        if user_input in Choices:
            choosing = False
            user_input = Choices.index(user_input) % 3 
        else:
            print("Please try again")

    comp_input = randrange(3)

    result = ""

    if user_input == comp_input:
        result = "Its a tie!"
    elif (user_input + 1) % 3== comp_input:
        result = "You lose!"
    else:
        result = "You win!"

    print "Computer's Choice: %s \nPlayer's Choice: %s \n%s" % (Choices[comp_input], Choices[user_input], result)
    

Playing = True
while Playing:
    playgame()
    
    again = raw_input("Play Again? Yes(y) / No(n): ")

    if not again in ["Yes", "YES", "yes", "Y", "y"]:
        Playing = False
