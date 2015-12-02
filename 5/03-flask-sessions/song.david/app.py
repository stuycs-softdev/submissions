from Flask import Flask, render_template, request, session, redirect, url_for
##import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/home/")
def home():
    if "logged_in" in session and session["logged_in"]:
        return render_template("home.html")
    else:
        return redirect(url_for("login"))

@app.route("/login", methods = ["GET","POST"])
@app.route("/login/", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        if "logged_in" in session and session["logged_in"]:
            return render_template(url_for("home"))
        else:
            return render_template("login.html")
    else:
        return "not get"

    
if __name__ == "__name__":
    app.debug = True
    app.run(host = "0.0.0.0", port=8000)
