from flask import Flask, render_template, session, redirect, url_for, request

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/hello")
def hello():
    return render_template("hello.html")

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")


@app.route("/name")
@app.route("/name/<lastname>/<firstname>")
def name(lastname = "", firstname = ""):
    d = {'lastname':lastname,
         'firstname': firstname}
    return render_template("name.html", dic = d)


@app.route("/reset")
def reset():
    session['n'] = 0
    return redirect("/home")
#return redirect(url_for("int))


@app.route("/login", methods = ["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        return "not GET"
    

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "ping"
    app.run(port = 8000)
