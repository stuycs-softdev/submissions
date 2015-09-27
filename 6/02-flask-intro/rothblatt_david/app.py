from flask import Flask, render_template
from random import randrange


app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/funny")
def funny():
    return render_template("funny.html")

@app.route("/cronut")
def cronut():
    return render_template("cronut.html")

@app.route("/madlib")
def madlibify():
    adjs = ["RED","YELLOW","BLUE","SAD","HAPPY","BRAVE",\
        "FAT","HAIRY","GRUMPY","FLYING"]
    animals = ["DOG","CAT","LION","TIGER","BEAR","GIRAFFE"]
    verbs = ["WALK","TALK","PLAY","YELL","EAT","FIGHT"]
    d = {'adj': adjs[randrange(len(adjs))], 
    'animal': animals[randrange(len(animals))], 
    'verb': verbs[randrange(len(verbs))] }
    return render_template("madlib.html", d=d)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)


