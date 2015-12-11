from flask import Flask, render_template, request
import os.path
from pyGTrends import pyGTrends

app = Flask(__name__)
global connection
connection = None

@app.route("/", methods=['GET', 'POST'])
def index():
    global connection
    if request.method == "GET":
        if connection == None:
            return render_template("index.html", logged=False)
        else:
            return render_template("index.html", logged=True)
    else:
        google_username = request.form['username']
        google_password = request.form['password']
        try:
            connection = pyGTrends(google_username, google_password)
        except:
            return render_template("index.html", err="Incorrect Username or Password", logged=False)
        return render_template("index.html", logged=True)
    return render_template("index.html", logged=False)

@app.route("/search", methods=['GET'])
def search():
    if request.method == "GET":
        term = request.form['search']
        path = "data/" + term + ".csv"
        if not (os.path.isfile(path)):
            connection.request_report(term, hl='en-US', cat=None, geo=None, date=None)
            connection.save_csv("data/", term)
        with open(path, "r") as f:
            data = (f.read()).split("\n")
        for x in range(5, len(data)):
            print(data[x])

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
