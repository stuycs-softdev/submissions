from flask import Flask, render_template, request
import time, json, csv

app = Flask(__name__)

@app.route("/")
def index():
    f = open('MOCK_DATA.csv')
    csv_f = csv.reader(f)
    return render_template("index.html",info=csv_f)

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
