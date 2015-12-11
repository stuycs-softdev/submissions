from flask import Flask, render_template, request, redirect, url_for
import csv, random, json

app = Flask(__name__)

profiles = []
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
profiles = profiles[1:]


@app.route("/", methods=["GET","POST"])
def index():
    url = """
    https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=%s&userip=192.168.1.112
    """
    return render_template("index.html")#, profiles=profiles,url=url)


@app.route("/profile")
def profile():
    i = request.args.get("data")
    print(int(i))
    if int(i)>=0:
        result = profiles[int(i)]
    else:
        result = profiles
    return json.dumps(result)


if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)

