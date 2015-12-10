from flask import Flask, render_template,request
import time, json

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getstuff")
def getstuff():
    print "In getstuff"
    time.sleep(5);
    print "returning from getstuff"
    return "stuff"

@app.route("/getfast")
def getfast():
    print "in getfast"
    print "returning from getfast"
    return "fast stuff"

@app.route("/getslow")
def getslow():
    print "in getslow"
    time.sleep(10)
    print "returning from getslow"
    return "slow stuff"

@app.route("/upcase")
def upcase():
    data = request.args.get("data")
    print data
    result = {'original' : data,
            'result':data.upper()}
    return json.dumps(result)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
