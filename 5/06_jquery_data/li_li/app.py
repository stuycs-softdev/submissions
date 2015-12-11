from flask import Flask, render_template,request
import time, json, random

app = Flask(__name__)


def getDataList():
    file_=open("static/MOCK_DATA.csv","r")
    datalines=file_.readlines()
    data=[]
    data2=[]
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
        data2+=[temp]
    return data2

DATALIST=getDataList()
def getRandomGuy():
    randNum=random.randrange(0,75)
    print DATALIST[randNum]
    return DATALIST[randNum]
    

def searchGuy(searchh):
    for profile in DATALIST:
        if profile["email"]==searchh or profile["first"]==searchh or profile["last"]==searchh or profile["address"]==searchh or profile["country"]==searchh:
            print profile
            return profile

    #cannot find the name/address/email/country (return a random one)
    return getRandomGuy()

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
    inputt = request.args.get("input")
    print inputt
    result = searchGuy(inputt)
    return json.dumps(result)

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
