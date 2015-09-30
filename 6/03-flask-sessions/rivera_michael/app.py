from flask import Flask, render_template, session, redirect, url_for

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/about")
def home():
    return """<center>
<h1>HELLO</h1>
<br>
<a href="http://localhost:8000/login">LOGIN</a>
</center>"""

@app.route("/login",methods=["GET","POST"])
def login():
    if 'n' not in session:
        session
