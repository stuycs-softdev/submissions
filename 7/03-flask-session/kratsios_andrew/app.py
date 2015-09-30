from flask import Flask,render_template, session, request, redirect, url_for
import utils

app = Flask(__name__)

secval = 0

@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html")
    
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
            global secval
            secval = 1
            return render_template("success.html")
        else:
            error = "Invalid username or password"
            return render_template("login.html",err=error)

@app.route("/logout")
def logout():
    global secval
    secval = 0
    return render_template("logout.html")

@app.route("/secret")
def secret():
    if (secval == 1):
        return render_template("secret.html")
    else:
        return redirect(url_for("login"))



if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Don't store this on github"
    app.run(host="0.0.0.0", port=8000)
