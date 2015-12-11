from flask import Flask, render_template,request, redirect, url_for, session
import time, json
import data

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search")
def search():
    return "In search"

@app.route("/profile")
def profile():
    newprofile = data.randomprofile()
    return json.dumps(newprofile)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)