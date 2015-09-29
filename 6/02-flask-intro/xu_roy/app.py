from flask import Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/about")
def about():
    return render_template("/about.html")

@app.route("/random")
def random():
    import random
    rand = random.randrange(1, 100)
    return render_template("/random.html", rand=rand)

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        username = request.form['username']
        password = request.form['password']
        if utils.authenticate(username, password):
            return render_template("success.html")
        else:
            error = "Invalid Username or Password"
            return render_template("login.html", err=error)
    return render_template("login.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
