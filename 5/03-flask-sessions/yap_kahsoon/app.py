from flask import Flask, render_template, request, session, redirect, url_for
import util

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
@app.route("/login", methods=["GET", "POST"])
def login():
    if 'ID' not in session:
        session['ID']="qwe"        
    if request.method=="GET":
        return render_template("login.html")
    else:
        pressed = request.form['button']
        username = request.form['username']
        password = request.form['password']
        if pressed=="cancel":
            return render_template("login.html")
        if util.authenticate(username, password):
            session['ID']="zxc"
            return redirect("/secret")
        else:
            return render_template("login.html", error="Nice try hacker")



@app.route("/secret", methods=["GET", "POST"])
def secret():
    if session['ID']=="zxc":
        if request.method=="GET":
            return render_template("secret.html")
        else:
            log = request.form['log']
            if log=="exit":
                session['ID']="qwe"
            if session['ID']=="qwe":
                return redirect("/login")
            else:
                return render_template("secret.html")
    else:
        return redirect("/")

@app.route("/about")
def about():
    return render_template("about.html", id=session['ID'])
    
if __name__ == "__main__":
    app.debug = True
    app.secret_key="Potato"
    app.run(host="0.0.0.0", port=8000)
