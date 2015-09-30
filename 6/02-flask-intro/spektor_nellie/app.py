from flask import Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        user = request.form['username']
        passw = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template('login.html')

            if utils.authenticate(user, passw):
                return "<h1> Logged In <\h1>"
            else:
                error="Invalid username or password"
                return render_template("login.html", err=error)

    
@app.route("/team")
@app.route("/team/")
@app.route("/team/<cookies>")
@app.route("/team/<cookies>/<milk>")
def team(cookies="", milk=""):
    d = {"cookieType": cookies,
         "milkType" : milk}
    return render_template("team.html", d = d)

@app.route("/animal")
def animal():
    import random
    r = random.randrange(1, 9)
    return render_template("animal.html", fact = r)

@app.route("/facts")
def facts():
    return render_template("facts.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
   
#Running on http://localhost:8000/
