from flask import Flask, render_template, request, session
from flask import redirect, url_for
import utils

redirToLogin = '<center><h1>You must be logged in to view this page!</h1><br>Redirecting to Login Page...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/login">'

app = Flask(__name__)

def isLoggedIn():
    if "loggedIn" not in session:
        session["loggedIn"] = False
    return session["loggedIn"]

@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/horoscope")
def horoscope():
    if isLoggedIn():
        return "<h1>success</h1>"
    else:
        return redirToLogin

@app.route("/info", methods=["GET", "POST"])
def enterInfo():
    if isLoggedIn():
        if request.method=="GET":
            return render_template("info.html")
        else:
            month = request.form['month']
            day = request.form['day']
            favCol = request.form['color']
            infoList = [month, day, favCol]
            button = request.form['button']
            error = ''
            if '' in infoList:
                error = "All the information was not filled out!"
                return render_template("/info", err = error)
            if button == 'cancel':
                return render_template("/info")
            else:
                session["infoList"] = infoList
                return redirect(url_for("horoscope"))
        return render_template("info")
    else:
        return redirToLogin

@app.route("/login",methods=["GET","POST"])
def login():
    if isLoggedIn():
        return '<center><h1>You are already logged in!</h1><br>Press the logout link in order to log out. Redirecting to horoscope...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/info">'
    elif request.method=="GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button == "cancel":
            return render_template("login.html")
        if utils.authenticate(uname,pword):
            session["loggedIn"] = True
            session["name"] = uname
            session["pass"] = pword
            return redirect(url_for("enterInfo"))
        else:
            session["loggedIn"] = False
            error = "Bad username or password"
            return render_template("login.html",err=error)


if __name__ == "__main__":
   app.debug = True
   app.secret_key = "Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
