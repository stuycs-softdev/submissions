## DAVID ROTHBLATT
## SOFT DEV
## Mr Zamansky
## Fall 2015

from flask import Flask, render_template, request, session, redirect, url_for
from random import randrange
import auth

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/home/")
def home():
    return redirect(url_for("about"))

@app.route("/about")
@app.route("/about/")
def about():
    return render_template("about.html")

@app.route("/secret")
@app.route("/secret/")
def secret():
    if 'username' in session:
        return render_template("secret.html")
    else:
        err = "You are not logged in!"
        return render_template("login.html", err = err)


@app.route("/login", methods=["GET","POST"])
@app.route("/login/", methods=["GET","POST"])

def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']

        if button=="cancel":
            return render_template('login.html')

        if auth.authenticate(uname, pword):
            if 'username' not in session:
                session['username'] = uname
                return redirect(url_for("secret"))
        else:
            err = "INVALID USERNAME OR PASSWORD!!"
            return render_template("login.html", err = err)


@app.route("/logout")
@app.route("/logout/")
def logout():
    del session['username']
    return redirect(url_for("about"))

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "cronut"
    app.run(host = '0.0.0.0', port = 8000)


