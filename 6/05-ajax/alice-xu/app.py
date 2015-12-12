from flask import Flask, render_template, request
import os.path
import json
import requests
from pyGTrends import pyGTrends

app = Flask(__name__)
global connection
global counter
global popList
connection = None
counter = 0
popList = None

@app.route("/", methods=['GET', 'POST'])
def index():
    global connection
    global popList
    popList = popularList()
    if request.method == "GET":
        if connection == None:
            return render_template("index.html", logged=False)
        else:
            return render_template("index.html", logged=True, popular=popList)
    else:
        google_username = request.form['username']
        google_password = request.form['password']
        try:
            connection = pyGTrends(google_username, google_password)
        except:
            return render_template("index.html", err="Incorrect Username or Password", logged=False)
        return render_template("index.html", logged=True, popular=popList)
    return render_template("index.html", logged=False)

@app.route("/search", methods=['GET'])
def search():
    if request.method == "GET":
        term = request.args.get('search')
        data = trend(term)
        results = parseTrend(data)
        return json.dumps(results)

@app.route("/popular")
def popular():
    global counter
    global popList
    if counter >= 20:
        counter = 0
    data = trend(popList[counter].encode("utf-8"))
    print(popList[counter].encode("utf-8"))
    counter += 1
    r = parseTrend(data)
    return json.dumps(r)

def trend(term):
    path = "data/" + (term.decode("utf-8")).encode("ascii", "ignore") + ".csv"
    if not (os.path.isfile(path)):
        connection.request_report(term, hl='en-US', cat=None, geo=None, date=None)
        connection.save_csv("data/", (term.decode("utf-8")).encode("ascii", "ignore"))
    with open(path, "r") as f:
        data = (f.read()).split("\n")
    return data

def popularList():
    results = requests.get("http://hawttrends.appspot.com/api/terms/")
    r = results.json()
    return r["42"]

def parseTrend(data):
    results = []
    yearNums = []
    year = "2004"
    if data[4].split(",")[0] == "Month":
        for x in range(5, len(data)):
            if data[x] == "":
                if yearNums != []:
                    results.append(sum(yearNums) / float(len(yearNums)))
                return results
            else:
                dates = data[x].split("-")
                if dates[0] != year:
                    year = dates[0]
                    results.append(sum(yearNums) / float(len(yearNums)))
                    yearNums = []
                else:
                    yearNums.append(int((dates[1].split(","))[1]))
    else:
        for x in range(5, len(data)):
            if data[x] == "":
                if yearNums != []:
                    results.append(sum(yearNums) / float(len(yearNums)))
                return results
            else:
                chars = data[x].split(" ")
                dates = chars[2].split("-")
                if dates[0] != year:
                    year = dates[0]
                    results.append(sum(yearNums) / float(len(yearNums)))
                    yearNums = []
                else:
                    yearNums.append(int((dates[2].split(","))[1]))
    return results


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
