from flask import Flask, render_template,request
import time, json, random

app = Flask(__name__)


def getDataList():
    file_=open("static/MOCK_DATA.csv","r")
    datalines=file_.readlines()
    data=[]
    for line in datalines:
        data+=[line.split(",")]
    return data

@app.route("/")
def index():
   
    print DATALIST[randNum]
   
    data = request.args.get("data")
    return render_template("index.html")
    
@app.route("/loop")
def randloop():
    DATALIST=getDataList()
    randNum=random.randrange(0,75)
    rando = request.args.get("randData")
    result={'randData':rando}
    json.dumps(result)

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
