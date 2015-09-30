from flask import Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/login")
def loginScreen():
    if request.method == "GET":
        return render_template("login.html")
    else:
        first = request.form['firstName']
        last = request.form['lastName']
        button = request.form['button']
        if authenticate(first,last):
            return render_template("Narnia.html")
        else:
            error = "Invalid username and/or password"
            return render_template("login.html",err=error)

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/Narnia")
def Narnia():
    return render_template("Narnia.html")

@app.route("/out")
def out():
    return render_template("out.html")

@app.route("/")
@app.route("/home")
def index():
    return render_template("home.html",args = request.args)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port = 8000)
