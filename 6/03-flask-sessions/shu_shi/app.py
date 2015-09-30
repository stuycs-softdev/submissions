from flask import Flask,render_template,request
from flask import redirect,url_for

app = Flask(__name__)
@app.route("/")

@app.route("/homepage")
def home():
    button = request.form['button']
    if button=="login here":
        return render_template('login.html')

    

@app.route("/login", methods = ["GET","POST"])
def login():
        username = request.form['username']
        password = request.form['password']
        if utils.autheticate(username,password):
            return redirect(url_for('secret'))
        else:
            return redirect(url_for('login'))

@app.route("/secret")
def secret():
    import random
    rand = random.randrange(0,100)
    return render_template("secret.html", rand = rand)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 2000)
