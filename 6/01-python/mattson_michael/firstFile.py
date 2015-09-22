def eightBall(s):
    import random
    Answers = ["It is certain", "It is decidedly so", "Without a doubt", "Without a doubt",
    "Outlook good", "Reply hazy try again", "Ask again later", "Better not tell you now",
    "Don't count on it", "My reply is no", "My sources say no", "Very doubtful"]
    answer = ""
    answer = Answers[random.randint(0,(len(Answers)-1))]
    print answer

eightBall("Are you sentient?")
