from flask import Flask, render_template, request, session
from flask import redirect, url_for
import utils

redirToLogin = '<center><h1>You must be logged in to view this page!</h1><br>Redirecting to Login Page...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/login">'

redirToInfo = '<center><h1>You have not filled out all of your information yet!</h1><br>Redirecting to Info Page...</center><META HTTP-EQUIV="refresh" CONTENT="3;url=/login">'

app = Flask(__name__)

def isLoggedIn():
    if "loggedIn" not in session:
        session["loggedIn"] = False
    return session["loggedIn"]

def checkHoroscope():
    month = session["month"]
    day = session["day"]
    if (month == "March" and day >= 21) or (month == "April" and day <= 19):
        return 'Aries'
    if (month == "April" and day >= 20) or (month == "May" and day <= 20):
        return 'Taurus'
    if (month = "May" and day >= 21) or (month == "June" and day <= 20):
        return 'Gemini'
    if (month = "June" and day >= 21) or (month == "July" and day <= 22):
        return 'Cancer'
    if (month = "July" and day >= 23) or (month == "August" and day <= 22):
        return 'Leo'
    if (month = "August" and day >= 23) or (month == "September" and day <= 22):
        return 'Virgo'
    if (month = "September" and day >= 23) or (month == "October" and day <= 22):
        return 'Libra'
    
    
    
    
    

@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html")

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

@app.route("/info", methods=["GET", "POST"])
def enterInfo():
    if isLoggedIn():
        if request.method=="GET":
            return render_template("info.html")
        else:
            month = request.form['month']
            day = request.form['day']
            favCol = request.form['color']
            infoDict = {'month': month,'day': day,'color': favCol]
            button = request.form['button']
            error = ''
            if '' in infoList:
                error = "You have not filled out all of your information!"
                return render_template("/info", err = error)
            if button == 'cancel':
                return render_template("/info")
            else:
                session["infoDict"] = infoDict
                session["allReady"] = True
                return redirect(url_for("horoscope"))
        return render_template("info")
    else:
        return redirToLogin

@app.route("/horoscope")
def horoscope():
    name = ''
    descript = ''
    pic = ''
    bgcolor = session[infoDict['color']]
    if isLoggedIn() and !session['allReady']:
        return redirToInfo
    elif isLoggedIn() and session['allReady']:
        if 
        return render_template("horoscope.html", infoList) 
    else:
        return redirToLogin

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
