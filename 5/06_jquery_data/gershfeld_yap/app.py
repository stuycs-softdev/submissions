from flask import Flask, render_template, request, redirect, url_for
import csv, random

profiles = []

app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
def index():
    url = """
    https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=%s&userip=192.168.1.112
    """
    profile = profileReader.randomProfile()
    return render_template("index.html", profile=profile,url=url)



if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)

data = open("./static/MOCK_DATA.csv")
data = data.read()[:-1]
data = data.split("\n")
for x in data:
    person={}
    x = x.split(",")
    person["ID"] = x[0]
    person["first"] = x[1]
    person["last"] = x[2]
    person["email"] = x[3]
    person["country"] = x[4]
    person["drugs"] = x[5]
    person["gender"] = x[6]
    person["color"] = x[7]
    profiles.append(person);
