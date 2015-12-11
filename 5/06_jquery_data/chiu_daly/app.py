from flask import Flask, redirect, render_template, request, session
import csv,random,json

app = Flask(__name__)

@app.route("/home")
def index():
    return render_template("index.html")

@app.route("/getProfile")
def getProfile():
    profileNum=random.randint(0,99)
    profile=niceData[profileNum]
    return json.dumps(profile)

@app.route("/search")
def search():
    return "stuff"

if __name__ == "__main__":
    app.secret_key = "SECRET"
    app.run(host='0.0.0.0',port=8000)
