
from flask import Flask, render_template, request, session, redirect, url_for
import auth

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form["username"]
        pword = request.form["password"]
        if auth.authenticate(uname, pword):
            session['uname'] = uname
            return redirect(url_for("userpage"))
        else:
            return "You have entered an incorrect username or password <hr> Click <a href = '/home'> here </a> to go back to login page."

@app.route("/userpage")
def userpage():
    uname = session['uname']
    return render_template("userpage.html",uname=uname)

@app.route("/logout")
def logout():
    session['uname'] = ""
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.debug = True
    app.secret_key="Don't store this on github"
    app.run(host = "0.0.0.0", port = 8000)
