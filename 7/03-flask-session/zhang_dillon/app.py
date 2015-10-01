from flask import Flask, render_template, request, session, redirect, url_for
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/hidden")
def hidden():
    if 'user' in session and session['user'] == 'master':
        return render_template("hidden2.html")
    else:
        return render_template("hidden1.html")

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        if utils.authenticate(uname, pword):
            session['user'] = 'master'
            return render_template("login.html",status="Login Successful")
        else:
            return render_template("login.html",status="Failed Login Attempt")

@app.route("/logout")
def logout():
    session['user'] = ''
    return redirect(url_for("home"))

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "secret_key"
   app.run(host="0.0.0.0", port=8000)
