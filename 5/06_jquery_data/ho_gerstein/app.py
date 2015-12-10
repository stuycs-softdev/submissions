from flask import Flask, render_template,request
import time, json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search")
def search():
    return "search"

@app.route("/random")
def random():
    return "random"
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
