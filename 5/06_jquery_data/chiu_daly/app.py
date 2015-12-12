from flask import Flask, redirect, render_template, request, session
import time,json,read

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/random")
def random():
    profile = read.getProfile()
    return json.dumps(profile)

@app.route("/search")
def search():
    name = request.args.get("name")
    profile = read.searchProfile(name)
    return json.dumps(profile)

if __name__ == "__main__":
    app.secret_key = "eiERKI92340EROIG"
    app.run(host='0.0.0.0',port=8000)
