from flask import Flask, render_template, request
from flask import redirect, url_for, session
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    if 'logged' not in session:
        return render_template("/index.html")
    else:
        return render_template('/secret.html')

@app.route("/about")
def about():
    return render_template("/about.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        username = request.form['username']
        password = request.form['password']
        if utils.authenticate(username, password):
            if 'logged' not in session:
                session['logged'] = 1
            success="You've successfully logged in"
            return render_template("index.html", status=success)
        else:
            error = "Invalid Username or Password"
            return render_template("login.html", status=error)
    return render_template("login.html")

@app.route("/logout")
def logout():
    if 'logged' in session:
        del session['logged']
    logout = "You've succesfully logged out"
    return render_template("index.html", status=logout)


if __name__ == "__main__":
    app.debug = True
    app.secret_key="This is a secret key"
    app.run(host='0.0.0.0', port=8000)
