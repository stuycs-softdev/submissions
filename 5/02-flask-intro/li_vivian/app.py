from flask import Flask, render_template, request
import utils

app = Flask(__name__)

class LoggedIn:
    is_login = False

#@app.route("/home")
#@app.route("/")
#def home():
#    return render_template("home.html")

@app.route("/login", methods=["GET", "POST"])
@app.route("/login/", methods=["GET", "POST"])
@app.route("/", methods=["GET", "POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        button = request.form['button']
        user = request.form['username']
        pw = request.form['password']
        if button == "cancel":
            return render_template("login.html")
        if utils.authenticate(user, pw):
            LoggedIn.is_login = True
            return "You can now access the secret page"
            #return render_template("access.html")
        else:
            return render_template("login.html", error = "INVALID USERNAME OR PASSWORD")

def access():
    button = request.form['button']
    if button == "Go to secret":
        return render_template("secret.html")
"""                                   
@app.route("/about")
def about():
    return render_template("about.html") 
"""

@app.route("/secret")
def secret():
    if LoggedIn.is_login:
        return render_template("secret.html")
    else:
        return "NOT LOGGED IN"
"""
@app.route("/pie")
@app.route("/pie/")
@app.route("/pie/<flavor>")
def pie(flavor = "blueberry"):        
    import random 
    r = random.randrange(1, 100)
    if r > 50:
        msg = "THAT'S A LOT OF PIES"
    if r < 50:
        msg = "WOW"        
    d = {'flavor': flavor,
         'message': msg}

    return render_template("pie.html", d = d, number = r)
"""
if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
