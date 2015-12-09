from flask import Flask, render_template, request, redirect, url_for, session
import datetime
import utils
import sqlite3
import shelve
from pymongo import MongoClient

app = Flask(__name__)

@app.route("/index", methods=["GET","POST"])
@app.route("/", methods=["GET","POST"])
def index():
    return render_template("base.html")



if __name__=="__main__":
    app.debug=True
    app.secret_key = "My name is Ted"
    app.run(host='0.0.0.0',port=8000)
