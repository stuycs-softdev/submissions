
from flask import Flask, render_template, request, session, redirect, url_for
import utils
app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    if 'username' in session:
        return render_template('home.html', username = session['username'])
    else:
        return render_template("home.html")

@app.route("/mypage")
def mypage():
    if 'username' in session:
        return render_template(session['username'] + ".html")
    else:
        return """<h1> Not logged in </h1>
                   <button><a href="/"> Home </a></button>"""

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
        bio = request.form['bio']
        button = request.form['button']
        if button == "cancel":
            return redirect(url_for("home"))
        if utils.add(username, password):
            f = open(username + ".html", 'w')
            message = "<html> <h1> " + username + "</h1> " + bio + "</html>"
            f.write(message)
            f.flush()
            return render_template("signedup.html")
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
            return redirect(url_for('home'))

        if utils.authenticate(username, password):
            session['username'] = username
            session['password'] = password
            return redirect(url_for('home'))
        else:
            error = "Bad username or password"
            return render_template("login.html", err = error)
@app.route("/logout")            
def logout():
    session.pop('username', None)
    return redirect(url_for('home'))
    

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Don't store this on github"
    app.run(host = '0.0.0.0', port = 8000)