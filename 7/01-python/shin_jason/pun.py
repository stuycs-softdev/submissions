import random

def pun():
    q1 = "What do you call a killer bee?"
    a1 = "BBGun"
    q2 = "What do you call an American bee?"
    a2 = "USB"
    q3 = "What is Forrest Gump's email password?"
    a3 = "1forrest1"
    q4 = "How did I escape Iraq?"
    a4 = "Iran"
    q5 = "What does a bee call his wife??"
    a5 = "Honey"
    punDict = {q1:a1, q2:a2, q3:a3, q4:a4, q5:a5}
    punDictCopy = punDict
    randQNum = random.randrange(len(punDict))
    randQ = punDict.keys()[randQNum]
    ans = ""
    response = ""
    restart = ""
    wrong = False
    score = 0
    print "Welcome to Guess the Bad Pun!\nRules are simple: Guess the answer to the pun, and get a point! \n*Note: Answers are one word and can contain letters and numbers.\nFirst Question:"
    while len(punDict) > 0:
        response = ""
        ans = ""
        restart = ""
        wrong = False
        ##print punDict.get(randQ)
        while (ans == ""):
            ans = raw_input(randQ + "\n")
        if ans.lower() != punDict.get(randQ).lower():
            wrong = True
            while response == "":
                response = raw_input("Wrong. Would you like to try again? (yes or no). Score: " + str(score) + "\n")
                if (response == "no"):
                    print "Okay. Next Question. The answer was " + punDict.get(randQ) + ". Score: " + str(score)
                    punDict.pop(randQ, None)
                    wrong = False
                    break
                if (response == "yes"):
                    ans = ""
                else:
                    response = ""
                    ans = ""
        elif ans.lower() == punDict.get(randQ).lower():
            score = score + 1
            print "Correct! You have " + str(score) + " point(s)! Next Question: "
            punDict.pop(randQ, None)
        if len(punDict) != 0 and wrong == False:
            randQNum = random.randrange(len(punDict))
            randQ = punDict.keys()[randQNum]
        if len(punDict) == 0:
            print "GAME OVER! Final Score: " + str(score)
            while restart == "":
                restart = raw_input("Do you want to play again? (yes or no)\n")
                if restart == "yes":
                    pun()
                if restart == "no":
                    print "Thanks for Playing!"
                else:
                    restart = ""
pun()
