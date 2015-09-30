from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    print "hello"

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/secret") # only if logged in
def secret():
    return render_template("secret.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/logout") # redirects to login page
def logout():
    return render_template("logout.html")

if __name__ = "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
