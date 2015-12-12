from flask import Flask, render_template, request
import time, json, csv

app = Flask(__name__)

@app.route("/")
def index():
    f = open('MOCK_DATA.csv')
    csv_f = csv.reader(f)
    profiles = []
    for person in csv_f:
        profiles.append(person)
    return render_template("index.html",info=profiles)

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
