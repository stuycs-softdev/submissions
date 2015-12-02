from flask import Flask, render_template, request
from flask import redirect, url_for
import utils

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/secret") # only if logged in
def secret():
    return render_template("secret.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        if utils.authenticate(uname, pword):
            return render_template("secret.html")
        else:
            error = "Invalid username or password. Try again?"
            return render_template("login.html",err=error)

@app.route("/logout") # redirects to login page
def logout():
    return redirect(url_for("index"))

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "15651"
    app.run(host='0.0.0.0',port=8000)
