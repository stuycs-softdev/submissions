from flask import Flask, render_template, request, session, redirect, url_for
import random

app = Flask(__name__)

def authenticate(uname,pword):
    if uname=="ka" and pword=="gers":
        return True
    else:
        return False

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if (request.method == "GET"): #default
        return render_template("login.html")
    else:
        username = request.form["user"]
        password = request.form["pass"]
        button = request.form["button"]
        if authenticate(username, password):
	    return redirect("/decision")
        else:
            return render_template("login.html")

@app.route("/about")
def decisions():
    return render_template("about.html")

@app.route("/decision")
def result():
    if 'user' not in session:
        ivy = ['Brown', 'Columbia', 'Cornell', 'Dartmouth', 'Harvard', 'Princeton', 'UPenn', 'Yale']
        d = {'user':'ka'}
        numColleges = 0
        for i in ivy:
            r = random.randint(0,1)
            if r > 0:
                d[i] = 'True'
                numColleges+=1
            else:
                d[i] = 'False'
        d['num'] = numColleges
        return render_template("result.html",d=d)
    else:
	return redirect("/login")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
