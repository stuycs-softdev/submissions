from flask import Flask, render_template,request, redirect, url_for, session
import time, json

app = Flask(__name__)

globaldata = []
count = 0

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getprofile")
def getprofile():
    print "In getprofile"
    fd = open("datafile.txt", 'r')
	buff = fd.readlines()
	bufflist = []
	for line in buff:
		tmp = line.split(',')
		bufflist.append(tmp)
	globaldata = bufflist
	fd.close()
	print "Leaving getprofile"
	return "Updated profile"

@app.route("/getdata")
def getdata():
	print "In getdata"
    buff = globaldata[count]
	count++
	print "Leaving getdata"
	return buff
	
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
