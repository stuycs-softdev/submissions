from flask import Flask, render_template, session, request
from flask import redirect, url_for

app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    if "in" not in session:
        session["in"] = False
    if session["in"]:
        mes = """<button><a href = "/secret"> Visit The Secret </a></button><hr>
            <button><a href = "/logout"> logout </a></button>"""
    else:
        mes = '<button><a href = "/login"> Login to see the secret </a></button>'
    return render_template("home.html", mes = mes)
        

@app.route("/login",methods=["GET","POST"])
def login():
    if "in" not in session:
        session["in"] = False
    if request.method=="GET":
        return render_template("login.html")
    else:
        uname = request.form['user']
        pword = request.form['pass']
        button = request.form['button']
        if uname=="good" and pword=="egg":
            session["in"] = True
            return redirect(url_for("secret"))
        else:
            error = "Bad egg."
            return render_template("login.html",err=error)

@app.route("/secret")
def secret():
    if "in" not in session:
        session["in"] = False
    if not session["in"]:
        return redirect(url_for("login"))
    else:
        mes = """The secret to a good omelet is the egg. <hr>
    <img src="http://phdesignshop.com/phScoop/wp-content/uploads/2008/05/good-egg.jpg">
    <hr>
            <button><a href = "/logout"> Logout </a></button>"""
    return render_template("home.html", mes = mes)

@app.route("/logout")
def out():
    session["in"] = False
    return redirect(url_for("home"))

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
