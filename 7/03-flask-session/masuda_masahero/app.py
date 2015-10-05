from flask import Flask, render_template, request, session
import random, redirect, url_for, utils


app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/home/")
def home():
    return render_template("home.html")

@app.route("/lucky_color")
def lucky():
    n = random.randrange(0,7)
    list = ["red","orange","yellow","green","blue","indigo","violet"]
    color = list[n]
    return render_template("lucky_color.html", color = color)

@app.route("/cookie_clicker"):
    if 'n' not in session:
        session['n'] = 0
    n = session['n']
    n = n + 100
    session['n'] = n

    return render_template("cookie_clicker.html")


@app.route("/userlogin", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        username = request.form["username"]
        password = request.form["password"]
        if utils.authenticate(username, password):
            session['username'] = username
            return redirect(url_for("user_profile"))
        else:
            return "Error: Incorrect username or password <hr><a href = '/home'>Try again</a></hr>"

@app.route("/user_profile")
def userprofile():
    username = session['username']
    return render_template("user_profile", username = username)

@app.route("/logout")
def logout():
    session['username'] = ""
    return redirect(url_for("home"))

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "secret"
    app.run(host = "0.0.0.0", port = 8000)
