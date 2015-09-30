from flask import Flask,render_template, request, session
import random
import util
app = Flask(__name__)
app.secret_key = "bleh"

@app.route("/")
def hello():
    number = random.randrange(0,100,5)
    return render_template("hello.html",number=number)

@app.route("/fire")
def fire():
    string = "fire.jpg"
    return render_template("fire.html")
    FILE.close()

@app.route("/what")
@app.route("/what/<b>")
@app.route("/what//<r>")
@app.route("/what/<b>/<r>")
def what(b="heart",r="wrong"):
    return render_template("what.html",b=b,r=r)

#@app.route("/form", methods=["GET","POST"])
#def form():
#    if request.method == "GET":
#        return render_template("form.html")
#    else:
#        form = request.form
#        u = form["user"]
#        p = form["pass"]
#        if p == "bleh":
#            return render_template("login.html")
#        else:
#            return render_template("form.html",err="bleh!")

@app.route("/session")
def sesh():
    n = 0
    if 'n' not in session:
        session['n'] = 0
    else:
        n = session['n']
        n = n + 1
        session['n'] = n
    return render_template("session.html", n=n)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        form = request.form
        uname = form["uname"]
        pword = form["pword"]
        if util.authenticate(uname,pword):
            return render_template("secret.html")
        else:
            return render_template("login.html", err="Arg! Foiled Again!")

if __name__ == "__main__":
    app.debug = True
    app.run()
