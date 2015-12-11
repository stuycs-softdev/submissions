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
    DATALIST=getDataList()
    randNum=random.randrange(0,75)
    print DATALIST[randNum]
    DATALIST[randNum]=request.args.get("randData")
    data = request.args.get("data")
    return render_template("index.html")
    
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
