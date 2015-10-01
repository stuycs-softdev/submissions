from flask import Flask, render_template, request, session, redirect, url_for
import utils

app = Flask(__name__)

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template("login.html")
        if utils.authenticate(uname,pword):
            if 'logged' not in session:
                print session
                session['logged'] = True
            return redirect(url_for("about"))
        else:
            error = "Invalid username or password"
            return render_template("login.html",err=error)

@app.route("/")
def index():
    print request.args
    print request.args.get("size")
    return render_template("home.html",args=request.args)


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/logout")
def logout(): 
    session['user'] = False
    return redirect(url_for("home"))

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "Don't put on git"
   app.run(host="0.0.0.0", port=8700)
