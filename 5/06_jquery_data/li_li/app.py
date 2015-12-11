from flask import Flask, render_template,request
import time, json, random

app = Flask(__name__)


def getDataList():
    file_=open("static/MOCK_DATA.csv","r")
    datalines=file_.readlines()
    data=[]
    for line in datalines:
        data+=[line.split(",")]
    i=0
    for profile in data:
        i+=1
        if (i==75):
            break
        temp={}
        temp["first"]=profile[0]
        temp["last"]=profile[1]
        temp["email"]=profile[2]
        temp["address"]=profile[3]
        temp["country"]=profile[4].strip("\n")
        data+=[temp]
   
    return data

DATALIST=getDataList()
def getRandomGuy():
    randNum=random.randrange(0,75)
    return DATALIST[randNum]

def searchGuy(name):
    for profile in DATALIST:
        if profile["first"]+" "+profile["last"]==name:
            return profile
    return False

@app.route("/")
def index():
    #DATALIST=getDataList()
    #randNum=random.randrange(0,75)
    #print DATALIST[randNum]
   
    #data = request.args.get("data")
    return render_template("index.html")
    
@app.route("/loop")
def randloop():
    
    result=getRandomGuy()
    return json.dumps(result)

@app.route("/search")
def search():
    search = request.args.get("search")
    result = searchGuy(search)
    return json.dumps(result)

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
