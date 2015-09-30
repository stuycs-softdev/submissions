from flask import Flask, render_template, request, session, redirect, url_for
import utils

app = Flask(__name__)

ans = {"ans1": "hummingbird moth", "ans2": "mimic octopus"}

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html", s = session)


@app.route("/about")
def about():
    return render_template("about.html", s = session)


@app.route("/login", methods = ["GET", "POST"])
def login():
    if 'username' in session:
        return redirect(url_for('logout'))
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        if utils.authenticate(uname, pword):
            session['username'] = uname
            return redirect(url_for('guess'))
        else:
            error = "Invalid username or password"
            return render_template("login.html", error = error)


@app.route("/guess", methods = ["GET", "POST"])
def guess():
    if request.method == "GET":
        if 'username' not in session:
            return redirect(url_for('login'))
        else:
            return render_template("guess.html", s = session)
    else:
        answer = request.form['answer']
        if utils.checkans(answer, ans["ans1"]):
            return redirect(url_for('guess2'))
        else:
            error = "Try again"
            return render_template("guess.html", error = error)


    
@app.route("/logout")
def logout():
    if 'username' in session:
        del session['username']
        return redirect(url_for('home'))

    
        
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "potatoes"
    app.run(host = '0.0.0.0', port = 8000)
