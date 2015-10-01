from flask import Flask, render_template, session, redirect, url_for, request
import util

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login", methods = ["GET"])
def login():
    return render_template("login.html")

@app.route("/login", methods = ["POST"])
def login2():
    user = request.form['username']
    password = request.form['password']
    button = request.form['button']
    if util.check(user,password):
        if 'n' not in session:
            session['n'] = "logged"
    return render_template("login.html")
    
@app.route("/secret")
def secret():
    if 'n' in session:
        return render_template("secret.html")
    else:
        return redirect(url_for('login'))

@app.route("/logout")
def logout():
    if 'n' in session:
        del session['n']
    return redirect(url_for('login'))



if __name__ == "__main__":
    app.debug = True
    app.secret_key="secret"
    app.run(host = "0.0.0.0", port = 8000)
