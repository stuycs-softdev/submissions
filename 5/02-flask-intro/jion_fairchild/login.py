from flask import Flask, render_template, request, session
from security import authenticate

app = Flask(__name__)

@app.route("/login")
def login():
    uname = request.form['uname']
    password = request.form['password']
    button = request.form['button']
    if button == "login" and authenticate(uname,password):
        session['loginName'] = uname
    

@app.route("/secret-page")
def secret():
    
@app.route("/about")
def about():

if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0", port = 8001)
