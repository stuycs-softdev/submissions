## DAVID ROTHBLATT
## SOFT DEV
## Mr Zamansky
## Fall 2015

from flask import Flask, render_template, request
from random import randrange
import auth

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

@app.route("/student")
@app.route("/student/")
@app.route("/student/<last>")
@app.route("/student/<last>/")
@app.route("/student/<last>/<first>")
@app.route("/student/<last>/<first>/")
@app.route("/student/<last>/<first>/<id_num>")
@app.route("/student/<last>/<first>/<id_num>/")
@app.route("/student/<last>/<first>/<id_num>/<gpa>")
@app.route("/student/<last>/<first>/<id_num>/<gpa>/")

def person(last="", first="", id_num="", gpa=""):
    d = { "last": last, "first": first, "id_num": id_num, "gpa": gpa }
    return render_template("student.html", d=d)

@app.route("/lotto")
def lotto():
    x = 0
    nums = []
    while x < 5:
        nums.append(randrange(100))
        x+=1
    return render_template("lotto.html", nums=nums)

@app.route("/madlibify")
def madlibify():
    adjs = ["RED","YELLOW","BLUE","SAD","HAPPY","BRAVE",\
        "FAT","HAIRY","GRUMPY","FLYING"]
    animals = ["DOG","CAT","LION","TIGER","BEAR","GIRAFFE"]
    verbs = ["WALK","TALK","PLAY","YELL","EAT","FIGHT"]
    d = {'adj': adjs[randrange(len(adjs))], 
    'animal': animals[randrange(len(animals))], 
    'verb': verbs[randrange(len(verbs))] }
    return render_template("madlib.html", d=d)

@app.route("/bondify")
@app.route("/bondify/")
@app.route("/bondify/<last>/<first>/")
@app.route("/bondify/<last>/<first>")
def bondify(last="", first=""):
    d = {"last": last, "first": first}
    jobs = ["Teacher", "Doctor", "Lawyer", "CEO", "Web Designer", "Dancer", \
            "Accountant", "Politician", "Special Agent", "Cop", "Firefighter", \
            "Athlete", "Actor", "Pilot", "Engineer"]
    d['job'] = jobs[randrange(len(jobs))]
    agent_id = randrange(100, 10000)

    return render_template("bond.html", d=d, agent_id = agent_id)
    


@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button == "cancel":
	    return render_template("login.html")
	else:
            if auth.authenticate(uname, pword):
                return "<h1> Hello, " + uname + ". You are logged in</h1>"
            else:
                return "<h1>Invalid Username And/Or Password</h1>"

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)


