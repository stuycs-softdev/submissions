from flask import Flask, render_template, request, session, redirect, url_for
import authenticate

app = Flask(__name__)

@app.route("/", methods = ["GET","POST"])
def home():
    if(request.method == "GET"):
        return render_template("home.html",session = session)
    else:
        if(request.form['button'] == 'logout'):
            del session['username'];
            session['Login'] = False;
            return render_template("home.html",session = session)
@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html", failed = False)
    else:
        try:
            if authenticate.auth(request.form['username'],request.form['password']):
                session['username'] = request.form['username']
                session['Login'] = True
                return redirect(url_for('home'))
        except:
            pass
        return render_template("login.html", failed = True)

@app.route("/secret")
def secret():
    if session['Login'] == True:
        return render_template("secret.html")
    else:
        return "You are not authorized to view this page."

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Super secret key of secretness"
    app.run(host = "0.0.0.0", port = 8000)
