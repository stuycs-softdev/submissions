#figure out how to link login to usersession and pass the info onto usersession
from flask import Flask, render_template, request, session, redirect,url_for
import utils

app = Flask(__name__)

@app.route("/usersession")
def user():
    uname=session['username']
    return render_template("user.html",uname=uname)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login",methods=['GET','POST'])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        button = request.form['button']
        uname = request.form['Username']
        pword = request.form['Password']
        session['username'] = uname
        if utils.authenticate(uname,pword):
            return redirect("/usersession")
        else:
            return render_template("login.html",error="Invalid username or password")
        
                              

if __name__ == "__main__":
    app.debug = True
    app.secret_key="hello"
    app.run(host='0.0.0.0', port=8000)
    
