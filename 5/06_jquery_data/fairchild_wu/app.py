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
    name=profile['name']
    email=profile['email']
    phone=profile['phone']
    city=profile['city']
    return "Name: "+name+"<br>Email: "+email+"<br>Phone: "+phone+"<br>City: "+city

@app.route("/getImage")
def getImage():
    imageList=["https://i.imgur.com/QlmW4aC.jpg",
               "http://i.imgur.com/mAQPgXg.jpg",
               "http://i.imgur.com/ScXY5al.jpg",
               "http://i.imgur.com/SA4prMR.jpg",
               "http://i.imgur.com/xSjQNTx.jpg"]
    picNum=random.randint(0,len(imageList)-1)
    return "<img src="+imageList[picNum]+'" style="width:400px;height:400;">'

@app.route("/search")
@app.route("/search/<name>")
def search(name=""):
    for key in niceData:
            if niceData[key]['name'] == name:
                profile=niceData[key]
                name=profile['name']
                email=profile['email']
                phone=profile['phone']
                city=profile['city']
                return "Name: "+name+"<br>Email: "+email+"<br>Phone: "+phone+"<br>City: "+city
            else:
                return "No result"

if __name__ == "__main__":
    app.debug=True
    app.secret_key = "SECRET"
    app.run(host='0.0.0.0',port=8000)
