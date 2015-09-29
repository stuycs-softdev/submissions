from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)


@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/login", methods = ["GET", "POST"])
def login():
    
