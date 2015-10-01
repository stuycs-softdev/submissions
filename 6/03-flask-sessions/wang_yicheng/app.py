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
    if name in session:
        session[name].append(strftime("%a, %d %b %Y %H:%M:%S"))
        return redirect("/home/%s" % name)
    if name in loginCreds:
        if loginCreds[name] == pwd:
            session[name] = ["This is your first login!"]
            session[name].append(strftime("%a, %d %b %Y %H:%M:%S"))
            return redirect("/home/%s" % name)
    return render_template("login.html", error = 1)

@app.route('/home')
def homeRedir():
    return redirect("login")

@app.route('/home/<username>')
def home(username = ""):
    if username not in loginCreds or username not in session:
        return redirect('/home')
    return render_template("home.html", name = username, time = session[username][-2], logins = session[username][1:])

if __name__ == '__main__':
    app.debug = True
    app.secret_key = 'thisIsActuallyMyPassword'
    app.run(host = '0.0.0.0', port = 8000)
