from flask import Flask, render_template, request, session, redirect, url_for
import utils

app = Flask(__name__)


@app.route("/")
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
            return redirect(url_for('secret'))
        else:
            error = "Invalid username or password"
            return render_template("login.html", error = error)


@app.route("/secret")
def secret():
    if 'username' not in session:
        return redirect(url_for('login'))
    else:
        return render_template("secret.html", s = session)

@app.route("/logout", methods = ["GET", "POST"])
def logout():
    if 'username' in session:
        return render_template("logout.html")
    elif request.form['logout'] == "Goodbye":
        del session['username']
        return redirect(url_for('about'))
        
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "potatoes"
    app.run(host = '0.0.0.0', port = 8000)
