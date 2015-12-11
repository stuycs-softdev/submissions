from flask import Flask, render_template, request, redirect, url_for, session
import json

app = Flask(__name__)
data = []
counter = 1
file = open("MOCK_DATA.csv", 'r')
lines = file.readlines() #realines() should return list of lines
for line in lines:
    newlist = line.split(',')
    data.append(newlist)

file.close()

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getprofile")    #####puts csv data into global variable data
def getprofile():
    print "starting getprofile"
    print "ending getprofile"
    return json.dumps(data)              ####you have to have json.dumps

@app.route("/getdata")      ######returns a line from global variable data
def getdata():
    print "starting getdata"
    line = data[counter]     #for some reason, counter is a local variable
    counter += 1
    print "ending getdata"
    if counter > 99:
        return "end"
    return json.dump(line)


if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
