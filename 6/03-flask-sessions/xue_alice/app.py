from flask import Flask, render_template, request, session, redirect, url_for
import utils


app = Flask(__name__)

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/hello")
@app.route("/hello/")
@app.route("/hello/<name>")
@app.route("/hello/<name>/<task>")
def hello(name="",task=""):
    d = {"n":name, "t":task}
    return render_template("hello.html",name = name, task = task)


@app.route("/login",methods = ["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        if utils.authenticate(uname,pword):
            session['username'] = uname
            return redirect(url_for('secret'))
        else:
            error = "Invalid username or password"
            return render_template("login.html",error=error)

@app.route("/logout",methods = ["GET","POST"])
def logout():
    if 'username' in session:
        return render_template("logout.html")
    elif request.form['logout'] == "exit":
        del session['username']
        return redirect(url_for('about'))


@app.route("/secret")
def secret():
    if 'username' in session:
        if request.method == "GET":
            return render_template("secret.html", s = session)
        else:
            return redirect(url_for('logout'))
    else:
        return redirect(url_for('login'))

    
@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.debug = Trud
    app.secret_key = "gruyere"
    app.run(host='0.0.0.0', post=8000)

