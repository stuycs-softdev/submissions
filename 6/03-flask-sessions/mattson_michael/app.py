from flask import Flask, render_template, request, redirect, session, url_for
import utils

app = Flask(__name__)

@app.route("/login",methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template('login.html')

        # if we get here, we have the uname and pword
        # to try to authenticate
        if utils.authenticate(uname,pword):
            if 'l' not in session:
                session['l']=True
            return redirect(url_for('secretpage'))
        else:
            error="Invalid user or password"
            return render_template("login.html",err=error)

@app.route("/secretpage")
def secretpage():
    if 'l' not in session:
        return render_template("about.html",oops="You must log in to do that")
    if session['l']==True:
        return render_template("secretpage.html")
    else:
        return redirect(url_for('about'))
@app.route("/lo")
def lo():
    session.clear()
    return redirect(url_for('about'))

@app.route("/")
def about():
    return render_template("about.html")



if __name__ == "__main__":
   app.debug = True
   app.secret_key="SHH"
   app.run(host="0.0.0.0", port=8000)
