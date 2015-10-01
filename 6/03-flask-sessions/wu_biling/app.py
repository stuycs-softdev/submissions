from flask import Flask, render_template
from flask import redirect, url_for

app= Flask (__name__)

@app.route("/")
def default():
    return redirect (url_for('about'))

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/katz")
def katz():
    return render_template("katz.html")

@app.route("/login",methods= ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template('login.html')
'''
        else:
            error="Invalid user or password"
            return render_template("login.html",err=error)
'''
            
if __name__ == "__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=8000)
