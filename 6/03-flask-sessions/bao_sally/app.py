from flask import Flask, render_template, request, session, redirect, url_for
import utils

app = Flask(__name__)


ans = {'1': "moth", '2': "spider", '3': "fly", '4': "octopus", '5': "octopus", '6': "butterfly" }


@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", s = session)


@app.route("/about")
def about():
    return render_template("about.html", s = session)


@app.route("/login", methods = ["GET", "POST"])
def login():
    if 'uname' in session:
        return redirect(url_for('logout'))
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        if utils.authenticate(uname, pword):
            session['uname'] = uname
            return redirect(url_for('guess'))
        else:
            error = "Invalid username or password"
            return render_template("login.html", error = error)


    
@app.route("/logout")
def logout():
    if 'uname' in session:
        session.clear()
        return redirect(url_for('home'))



@app.route("/guess", methods = ["GET", "POST"])
@app.route("/guess/", methods = ["GET", "POST"])
def guess():
    if request.method == "GET":
        if 'uname' not in session:
            return redirect(url_for('login'))
        else: 
            if 'n' not in session:
                session['n'] = 0
                inc(1)
            return render_template("guess.html", s = session)
    else:
        a = request.form['answer']
        b = ans[str(session['n'])]

        if utils.checkans(a, b):
            if session['n'] == 6:
                session['n'] = 0
                return redirect(url_for('success'))
            else:
                inc(1)
                return render_template("guess.html", s = session)
        else:
            error = "Try again"
            return render_template("guess.html", error = error, s = session)


@app.route("/success")
def success():
    return render_template("success.html")

    

def inc(num):
    session['n'] = session['n'] + num
    session['link'] = "/static/pic" + str(session['n']) + ".jpg"
     

   
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "potatoes"
    app.run(host = '0.0.0.0', port = 8000)
