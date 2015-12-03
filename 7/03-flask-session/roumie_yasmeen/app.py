from flask import Flask, render_template, session, redirect, url_for
import utils

app = Flask(__name__)

@app.route("/")
def index():
    return request.args
    return request.args.get("size")
    return render_template("index.html", args=request.args)

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/logout")
def logout():
    return render_template("logout.html")

@app.route("/about")
def about():
    return render_template("about.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
