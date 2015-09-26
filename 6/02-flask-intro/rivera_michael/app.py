from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/pattern")
def pattern():
    return render_template("pattern.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/age")
def age():
    r = random.randrange(1,10)
    return render_template("age.html",step=r)
    
if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8000)
