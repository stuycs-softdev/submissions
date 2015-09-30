from flask import Flask, render_template, request, session, redirect, url_for
import authenticate

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html",session = session)

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        if authenticate.auth(request.form['username'],request.form['password']):
            session['username'] = request.form['username']
            session['Login'] = True
            return redirect(url_for('home'))

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Super secret key of secretness"
    app.run(host = "0.0.0.0", port = 8000)
