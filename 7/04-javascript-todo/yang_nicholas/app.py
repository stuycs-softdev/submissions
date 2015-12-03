from flask import Flask, render_template, request, session, redirect, url_for, escape
from flask_bootstrap import Bootstrap

app = Flask(__name__)
Bootstrap(app)
@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "V\xd7\x94<\xb50\xca\n\xf9\xa0@\x17\x06(\x17-\x8f\xf39\x83\xa2\xfcm\x14"
    app.run('0.0.0.0', port=8000)
