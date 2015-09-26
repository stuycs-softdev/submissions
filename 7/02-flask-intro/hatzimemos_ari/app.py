from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("hello world.html")

@app.route("/profile")
@app.route("/profile/")
@app.route("/profile/<lastname>")
@app.route("/profile/<lastname>/<firstname>")
@app.route("/profile/<lastname>/<firstname>/<title>")
def profile(lastname="",firstname="",title=""):
    return render_template("profile.html",firstname=firstname,lastname=lastname,title=title)

@app.route("/table")
def table():
    return render_template("table.html")

app.debug = True
app.run(host="0.0.0.0",port=8000)
