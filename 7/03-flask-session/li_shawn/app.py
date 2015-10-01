from flask import Flask, render_template, request, session
from flask import redirect, url_for
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html')

@app.route("/login", methods = ["GET", "POST"])
def login():
    if "logged" not in session:
        session["logged"] = False
    if request.method=="GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template("login.html")
        if utils.authenticate(uname,pword):
            session["logged"] = True
            return redirect(url_for("success"))
        else:
            error = 'INVALID IDENTIFICATION, ABORT SITE!!!'
            return render_template("login.html",err=error)

@app.route("/success")
def success():
    if "logged" not in session:
        session["logged"] = False
    if not session["logged"]:
        return redirect(url_for("login"))
    else:
        return render_template("success.html")

@app.route("/logout")
def logout():
    session["logged"] = False
    return redirect(url_for("login"))

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "get herbed"
    app.run(host='0.0.0.0',port=8000)
