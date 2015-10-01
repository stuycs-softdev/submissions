from flask import Flask, render_template, request, session, redirect, url_for

app = Flask(__name__)

invalid = False

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.form.has_key("username") and request.form.has_key("password"):
        if request.form["username"] == "CorrectUser" and request.form["password"] == "12345":
           session["loggedIn"] = True
           return redirect(url_for("hidden"))
        else:
            return render_template("login.html", error = "INVALID USERNAME OR PASSWORD", loggedIn = "no")
    elif session.has_key("loggedIn") and session["loggedIn"]:
        return render_template("login.html", loggedIn = "yes")
    else:
        return render_template("login.html", loggedIn = "no")

@app.route("/hidden")
def hidden():
    if session.has_key("loggedIn") and session["loggedIn"]:
        return render_template("hidden.html")
    else:
        return redirect(url_for("login"))

@app.route("/logout")
def logout():
    if session.has_key("loggedIn") and session["loggedIn"]:
        session["loggedIn"] = False
        return render_template("logout.html", message = "You have been logged out")
    else:
        return render_template("logout.html", message = "You are not logged in")
        
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "secret_key"
    app.run(host='0.0.0.0', port=8000)
