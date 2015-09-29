from flask import Flask, render_template, request
from authenticate import authenticate

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        user = request.form['user']
        password = request.form['pass']
        favNum = request.form['favNum']
        if authenticate(user, password,favNum):
            return render_template("game.html")


if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
