from flask import Flask, render_template, session, redirect, url_for, request

app = Flask(__name__)

@app.route("/about")
def about():
    if 'n' not in session:
        session['n']="logged out"
    n = session['n']
    n = "logged in"
    session['n'] = n
    return render_template("about.html",n=n)

@app.route("/secret")
def secret():
    return render_template("secret.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/gin")
def gin():
    if 'n' not in session:
        session['n']="logged out"
    n = session['n']
    n = "logged in"
    session['n'] = n
    return render_template("secret.html",n=n)

@app.route("/logout")
def logout():
    session['n']="logged out"
    return redirect(url_for('about'))
