

from flask import Flask, render_template, session, request
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")

def home():
    d = {}
    fruits = ['mango', 'papaya', 'strawberry', 'pineapple', 'apple', 'pear',
              'watermelon', 'guava', 'kiwi', 'dragonfruit', 'banana']
    return render_template("home.html")

@app.route("/about")
def about():
	return render_template("about.html")

@app.route("/login",methods=["GET","POST"])
def login():
	if request.method=="GET":
            return render_template("login.html")
	else:
            uname = request.form['username']
            pword = request.form['password']
            button = request.form['button']
            if button=="cancel":
                return render_template("login.html")
            if utils.authenticate(uname,pword):
                return render_template("secret.html")
                #return "<h1>Logged In</h1>"
            else:
                error = "Wrong username or password"
                return render_template("login.html",err=error)
            
@app.route("/secret")
def secret():
    return render_template("secret.html")
            
@app.route("/page2")
def page2():
    return render_template("page2.html")

@app.route("/page3")
def page3():
    return render_template("page3.html")

if __name__== "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
