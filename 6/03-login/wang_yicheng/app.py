from flask import Flask, render_template, session, redirect, request
from time import strftime

app = Flask(__name__)

loginCreds = {'user' : 'password', 'user2' : '12345'}

@app.route('/')
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/login')
def loginStatic():
    return render_template("login.html")

@app.route('/login', methods = ['POST'])
def login():
    name = request.form['name']
    pwd = request.form['pwd']
    if (name,pwd) in session:
        session[name,pwd]
        return redirect("/home/%s" % name)
    if name in loginCreds:
        if loginCreds[name] == pwd:
            return redirect("/home/%s" % name)
    return render_template("login.html", error = 1)

@app.route('/home')
def homeRedir():
    return redirect("login")

@app.route('/home/<username>')
def home(username = ""):
    if username not in loginCreds:
        return redirect('/home')
    return "<h1>HELLO</h1>"

if __name__ == '__main__':
    app.debug = True
    app.secret_key = 'thisIsActuallyMyPassword'
    app.run(host = '0.0.0.0', port = 8000)
