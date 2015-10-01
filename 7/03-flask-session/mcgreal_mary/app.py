from flask import Flask, render_template, session
from flask import redirect, url_for, request
import authenticate

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/login", methods= ['GET', 'POST'])
def login():
    if request.method == 'GET':
        return render_template ("login.html")
    else:
        username = request.form['username']
        password = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template("login.html")
        if authenticate.authenticate(username,password):
            session["authen"] = True
            return render_template ("secret.html")
        else:
            error = "Invalid username or password"
            return render_template("login.html",err=error)
            
@app.route("/secret")
def secret():
    if ("login" not in session) or session["login"] == False
        return "<h1>Please log in to view this page.</h1>"
    else:
        return render_template("secret.html")

@app.route("/logout")
def logout():
    session[authen]=False
    return redirect(url_for("logout"))


if __name__ == "__main__":
   app.debug = True
   app.secret_key = "top secret information"
   app.run(host="0.0.0.0", port=8000)