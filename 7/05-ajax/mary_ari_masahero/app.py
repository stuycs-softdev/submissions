import urllib2, json
from flask import Flask, render_template, request, session, redirect, url_for, escape

app = Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return render_template("index.html")

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "This is a secret key"
    app.run('0.0.0.0', port=8000)

