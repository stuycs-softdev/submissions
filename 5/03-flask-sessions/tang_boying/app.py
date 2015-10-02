from flask import Flask, render_template, request, session, redirect, url_for
import util

app = Flask(__name__)

@app.route("/")
@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        button=request.form['button']
        uname=request.form['username']
        pword=request.form['password']
        if button == "cancel":
            return render_template("login.html")
        if util.authenticate(uname,pword):
            if 'n' not in session:
                session['n'] = 0
            return redirect(url_for ("secret"))
        else:
            return render_template("login.html", error="INVALID USERNAME OR PASSWORD")


@app.route("/secret", methods=["GET","POST"])
def secret():
    #first part i put in login
    if request.method == "GET":
        n=session['n']
        n=n+1
        session['n']=n
        return render_template("secret.html", n=n)
    else:
        button = request.form["button"] 
        if button == "logout":            
            return redirect(url_for ("login"))
        elif button == "reset":
            session['n']=0
            return redirect(url_for ("secret"))
        else:
            return redirect(url_for ("secret"))


@app.route("/logout")
def logout():    
    if request.method == "GET":
        return render_template("logout.html")
    else:
        button = request.form("button") 
        if button == login:
            return redirect(url_for ("login"))


@app.route("/about")
def labout():
    return render_template("about.html")
            
if __name__ == "__main__":
    app.debug = True
    app.secret_key="this is a secret"
    app.run(host="0.0.0.0", port=8000)
