from flask import Flask, render_template, request
import random
import auth

app = Flask(__name__)

range = range(4)
rando = random.randrange(4)
pages = ["http://localhost:8000/","http://localhost:8000/about","http://localhost:8000/things","http://localhost:8000/custom"]
names = ["home","about","things","custom"]
like = ["My Macbook",'My "Totally Legal, I Still Buy CDs and things" Music Collection',"Literature"]
dislike = ["Overcast Days","Subway Delays","Not Sleeping Enough"]
message = {1: "The day is ripe for the taking!",3: "TREAT YO SELF",2: "Never not work!",0: "#YOLO"}

@app.route("/")
def home():
    return render_template("home.html", r = range, p = pages, n = names)

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        user = request.form['name']
        pas = request.form['pass']
        button = request.form['button']
        
        if auth.auth(user,pas):
            return render_template("loggedin.html")
        
        else:
            return render_template("login.html")

@app.route("/loggedin")
def loggedin():
    return render_template("loggedin.html")

@app.route("/about")
def about():
    return render_template("about.html", r = range, p = pages, n = names)

@app.route("/things")
def things():
    return render_template("things.html", r = range, p = pages, n = names,  l = like, d = dislike)

@app.route("/custom")
@app.route("/custom/<name>")
def custom(name = ""):
    call = name;
    return render_template("custom.html", rg = range, rd = rando, p = pages, n= names, m= message, c = name)


if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0',port = 8000)
