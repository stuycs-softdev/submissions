from Flask import Flask, render_template, redirect, url_for, session

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")
