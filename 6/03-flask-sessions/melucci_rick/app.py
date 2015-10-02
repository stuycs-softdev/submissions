from flask import Flask, render_template, request
import utils

app = Flask(__name__)

myList = []

@app.route("/")
@app.route("/home")
@app.route("/home.html")
def home(name=None):
    return render_template("home.html", name=name)


@app.route("/tablestuff")
def tablestuff():
    import random
    number = random.randrange(1,100)
    myList.insert(0, number)
    return render_template("tablestuff.html", n=number, d = myList)

@app.route("/lucky")
def lucky():
    import random
    number = random.randrange(1,100)
    page="<h1>Your number is %d </h1>" %(number)
    return page

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template('login.html')

    if utils.authenticate(uname,pword):
        return """<center><h1>Logged in</h1><h1 style="font-size: 72pt">WOOO YEAH IT WORKED</h1></center>"""

    else:
        error="Invalid username or password"
        return render_template("login.html", d=error)

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0' , port = 8000)
