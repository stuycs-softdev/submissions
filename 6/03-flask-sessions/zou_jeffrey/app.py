from flask import Flask, render_template, request, session, redirect, url_for
from authenticate import authenticate

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        user = request.form['user']
        password = request.form['pass']
        if authenticate(user, password):
            return redirect(url_for('secret'))

@app.route("/logout")
def logout():
    session['n'] = 0
    form['user']=""
    form['password']=""
    return render_template("home.html")

@app.route("/secret")
def secret():
    if n not in session:
        session['n']=1
    return render_template("secret.html")

@app.route("/random")
def random():
    number = Math.random()*100;
    return render_template("random.html", n = number)


if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Keyblade"
    app.run(host="0.0.0.0", port=8000)
