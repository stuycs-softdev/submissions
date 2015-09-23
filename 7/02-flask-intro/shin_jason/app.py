from flask import Flask, render_template

app = Flask(__name__)

@app.route("/home")
def about():
    return render_template("home.html")

@app.route("/
