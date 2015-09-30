from flask import Flask,render_template,request,sessions
from flask import redirect,url_for
import utils

app = Flask(__name__)
@app.route("/")

@app.route("/homepage")
def home():
        return render_template('homepage.html')

    

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template('login.html')
    else:
        username = request.form['username']
        password = request.form['password']
        button = request.form['button']
        if button == "return home":
            return redirect(url_for('homepage'))
        if utils.authenticate(username,password):
            return redirect(url_for('secret'))
        else:
            return redirect(url_for('login'))

@app.route("/secret", methods = ["GET","POST"])
def secret():
    if request.method == "GET":
        return redirect(url_for('login'))
    else:
        import random
        rand = random.randrange(0,100)
    return render_template("secret.html", rand = rand)

if __name__ == "__main__":
    app.debug = True
    app.secret_key="Don't store this on github"
    app.run(host = '0.0.0.0', port = 9578)
