from flask import Flask, render_template, request, session, redirect, url_for
import authen2

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login2.html")
    else:
        username = request.form["username"]
        password = request.form["password"]
        button = request.form["botton"]
        if button=="cancel":
            return render_template("login.html")
        if authen2.authen(username,password):
            return "<h1>Logged in</h1>"
        else:
            error = "username and password are incorrect"
            return render_template("login2.html",error=error)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)    
