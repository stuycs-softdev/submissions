from flask import Flask, render_template, request
import time, json, csv

app = Flask(__name__)

@app.route("/")
def index():
    

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
