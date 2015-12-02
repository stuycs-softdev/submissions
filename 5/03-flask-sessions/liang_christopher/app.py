from flask import Flask, render_template, request, session, redirect, url_for
import utils

app = Flask(__name__)


@app.route("/login", methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        button = request.form['button']
        uname = request.form['username']
        pword = request.form['password']
        if button == "cancel":
            return redirect(url_for('home'))
        if utils.authenticate(uname,pword):
            if 'n' not in session:
                session['n'] = 0
            return redirect(url_for('home'))
        else:
            return render_template("login.html",error="INVALID USERNAME OR PASSWORD")

@app.route("/logoff", methods=["GET","POST"])
def logout():
    # remove the username from the session if it's there
    session.pop('n', None)
    return redirect(url_for('login'))

@app.route("/home")
@app.route("/home/")
@app.route("/")
def home():
    return render_template("home.html")
@app.route("/portraits")
def portraits():
    return render_template("portraits.html")


@app.route("/creative")
def creative():
    return render_template("creative.html")


@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.debug = True
    app.secret_key="swag"
    app.run(host='0.0.0.0', port=8000)

#use dictionaries for templates 
#for ex
# d = {'last : 'T',
#      'first : 'Mr.'}
#return render_template('name.html',d=d)    ---->    fills in the template names with the dictionary names  ( {{d.blahblah}} in html code)

