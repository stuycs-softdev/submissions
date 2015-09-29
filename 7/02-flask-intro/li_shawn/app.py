from flask import Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("about.html")

@app.route("/login" methods = ["GET", "POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template("login.html")
        if utils.authenticate(uname,pword):
            return '<center><h1>Logged in</h1><br><img src = "http://i.imgur.com/LccckWB.gif"></center>'
        else:
            error = "Bad username or password"
            return render_template("login.html",err=error)

    
    

if __name__ == "__main__":
    app.run(host='0.0.0.0',port=8000)
