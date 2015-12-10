from flask import Flask, redirect, render_template, request, session

app = Flask(__name__)

@app.route("/getProfile")
def getProfile():
    return "THIS IS A PROFILE"

@app.route("/getImage"):
def getImage():
    return "https://www.imgur.com/funnypicture"

if name == "__main__":
    app.secret_key = "SECRET"
    app.run(0.0.0.0,port=8000)
