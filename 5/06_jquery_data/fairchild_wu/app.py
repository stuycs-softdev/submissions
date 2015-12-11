from flask import Flask, redirect, render_template, request, session
import csv,random,json
app = Flask(__name__)

niceData={}
file = open("data.csv")
data = csv.reader(file);
num=0
for row in data:
    holder= row[0].split("|")
    insideDic={}
    insideDic['name']=holder[0]
    insideDic['phone']=holder[1]
    insideDic['email']=holder[2]
    insideDic['city']=holder[3]
    if insideDic['name']!="Name":
        niceData[num]=insideDic
        num=num+1


@app.route("/home")
def index():
    return render_template("index.html")

@app.route("/getProfile")
def getProfile():
    profileNum=random.randint(0,99)
    profile=niceData[profileNum]
    return json.dumps(profile)

@app.route("/getImage")
def getImage():
    return "https://www.imgur.com/funnypicture"

@app.route("/search")
def search():
    return "stuff"

if __name__ == "__main__":
    app.secret_key = "SECRET"
    app.run(host='0.0.0.0',port=8000)
