from flask import Flask, render_template, session, redirect, url_for, request

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/about")
def home():
    return """<center>
<h1>HELLO</h1>
<br>
<img src="/static/twlight.gif">
<br>
<h2>A Portal to Something Wonderful</h2>
<a href="http://localhost:8000/login">LOGIN</a>
</center>"""

@app.route("/login",methods=["GET","POST"])
def login():
    if 'n' in session:
        return redirect(url_for('secret'))
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form["username"]
        pword = request.form["password"]
        button = request.form['button']
        if((uname == "name") and (pword == "word")):
            session['n'] = 0
            return redirect(url_for('secret'))
        return render_template("login.html")

@app.route("/secret")
def secret():
    if 'n' in session:
        return render_template("secret.html")
    else:
        return redirect(url_for('login'))

@app.route("/out")
def out():
    del session['n']
    return redirect(url_for('home'))


if __name__ == "__main__":
    app.debug = True
    app.secret_key="hi"
    app.run(host="0.0.0.0",port=8000)
