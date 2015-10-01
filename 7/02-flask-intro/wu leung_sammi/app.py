from flask import Flask, render_template, request, session, redirect, url_for
from helper import makeFile, allDict
import  random

app = Flask(__name__)


@app.route("/")
@app.route("/home")
@app.route("/about")
def home():
    num = random.randint(10000,1000000)
    if 'loggedIn' not in session:
        session['loggedIn'] = 0
    loggedIn = session['loggedIn']
    print loggedIn
    return render_template("home.html", n = num,loggedIn = loggedIn )

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html",loggedIn = 0)
    else:
        if (request.form["user"] == "test" and request.form["pass"] == "123"):
            session['loggedIn'] = 1
            return redirect(url_for("home"))
        else:
            return redirect(url_for("login"))

@app.route("/logout")
def logout():
    session['loggedIn'] = 0
    return redirect(url_for("home"))

@app.route("/hidden")
def hidden():
    if "loggedIn" in session and session['loggedIn'] == 0:
        return render_template("error.html",loggedIn = 0)
    else:
        return render_template("hidden.html", loggedIn = 1)

@app.route("/list", methods = ["GET","POST"])
def table():
    if request.method == "GET":
        loggedIn = session['loggedIn']
        return render_template("form.html", loggedIn = loggedIn)
    if request.method == "POST":
        question = request.form["question"]
        text0 = request.form["0"]
        text1 = request.form["1"]
        text2 = request.form["2"]
        text3 = request.form["3"]
        text4 = request.form["4"]
        text5 = request.form["5"]
        text6 = request.form["6"]
        text7 = request.form["7"]
        text8 = request.form["8"]
        text9 = request.form["9"]
        makeFile(question, text0, text1, text2, text3, text4, text5, text6, text7, text8, text9)
        d = allDict()
        loggedIn = session['loggedIn']
        return render_template("viewList.html", d = d, loggedIn = loggedIn)

@app.route("/viewlist")
def view():
    d = allDict()
    loggedIn = session['loggedIn']
    return render_template("viewList.html", d = d, loggedIn = loggedIn )
   
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "shh"
    app.run(host = '0.0.0.0', port = 8000)
