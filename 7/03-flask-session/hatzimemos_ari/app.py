from flask import Flask, render_template, request, session, redirect, url_for
import authen

app = Flask(__name__)

@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="GET":
        session["login"]=False
        return render_template("login.html")
    else:
        username = request.form["username"]
        password = request.form["password"]
        button = request.form["button"]
        if button=="cancel":
            return render_template("login.html")
        if authen.authen(username,password):
            session["login"] = True
            return redirect(url_for("secret"))
        else:
            error = "username and password are incorrect"
            return render_template("login.html",error=error)

@app.route("/secret")
def secret():
    if ("login" not in session) or session["login"] == False:
        return render_template("secret.html",output="You aren't logged in!",loggedIn=False)
    else:
        return render_template("secret.html",output="You made it! You're logged in!",loggedIn=True)

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Don't store this on github"
    app.run(host="0.0.0.0", port=8000)    
