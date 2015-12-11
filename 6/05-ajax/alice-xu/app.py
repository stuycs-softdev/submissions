from flask import Flask, render_template
from pytrends.pyGTrends import pyGTrends

app = Flask(__name__)
global connection
connection = None

@app.route("/")
def index():
    if connection != None:
        connection.request_report("pizza", hl='en-US', cat=None, geo=None, date=None)
        connection.save_csv("data/", "pizza")
    return render_template("index.html")

@app.route("/login")
def login():
    google_username = request.form['username']
    google_password = request.form['password']
    global connection
    try:
        connection = pyGTrends(google_username, google_password)
    except:
        print("broken")
    return render_template("/index.html")



if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
