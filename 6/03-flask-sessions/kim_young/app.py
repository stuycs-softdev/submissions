from flask import Flask, render_template, session, request
from flask import redirect, url_for

import random, string

app = Flask(__name__)

def random_generator(size):
    chars=string.ascii_uppercase + string.digits
    return ''.join(random.choice(chars) for x in range(size))

@app.route("/reset")
def reset():
    if 'n' in session:
        del session['n']
    return redirect(url_for('login'))

@app.route("/login", methods = ["GET","POST"])
def login():
    if 'n' in session:
        message = "Logged In Already!"
    else:
        if request.method == "GET":
            return render_template("login.html")
        else:
            uname = request.form['username']
            pword = request.form['password']
            button = request.form['button']
            if(uname == 'admin' and pword == 'hello'):
                message = "You Logged in Successfully!"
                session['n'] = "hello";
            else:
                message = "Incorrect Login or Password!"
    return render_template("login.html",m = message)

@app.route("/password")
def password():
    number = random.randrange(1,100)
    a = random_generator(8)
    b = random_generator(10)
    d = {"num" : number, "8char" : str(a), "10char" : str(b)}
    if "n" not in session:
        return redirect(url_for('home'));
    return render_template("password.html",info = d);

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

if __name__=="__main__":
    app.debug = True
    app.secret_key="Aaron Wang"
    app.run(host='0.0.0.0', port=7999)
