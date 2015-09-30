
from flask import Flask, render_template, request
import utils
app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/favoriteFencers")
def favoriteFencers():
    return render_template("favoriteFencers.html")

@app.route("/signup", methods = ["GET", "POST"])
def signup():
    if request.method == "GET":
        return render_template("signup.html")
    else:
        username = request.form['username']
        password = request.form['password']
        button = request.form['button']
        if button == "cancel":
            return redirect(url_for("home"))
        if utils.add(username, password):
            return "<h1> Added user </h1>"
        else:
            error = "Bad username or password -> Password must be more than 4 characters"
            return render_template("signup.html", err = error)
@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        username = request.form['username']
        password = request.form['password']
        button = request.form['button']
        if button == "cancel":
            return render_template("login.html")

        if utils.authenticate(username, password):
            return "<h1> Logged in </h1>"
        else:
            error = "Bad username or password"
            return render_template("login.html", err = error)
            
        
    

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)