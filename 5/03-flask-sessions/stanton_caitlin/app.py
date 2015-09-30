from flask import Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/login", methods=["GET","POST"])
@app.route("/login/", methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        button = request.form['button']
        username = request.form['username']
        password = request.form['password']
        if button == "Go Back":
            return render_template("login.html")
        if utils.authenticate(username,password):
            return render_template("secret.html")
        else:
            return render_template("login.html",error="INVALID USERNAME OR PASSWORD")

"""
@app.route("/increase")
def increase():
    if 'n' not in session:
	    session['n'] = 0
    n = session['n']
    n = n + 1
    print n, "years"
    return redirect("/")			
			
@app.route("/subtract")
def subtract():
    if 'n' not in session:
	    session['n'] = 0
    n = session['n']
    n = n - 1
    print n, "years"
    return redirect("/")
"""
	
@app.route("/")
def index():
    return render_template("index.html",args = request.args)



if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)