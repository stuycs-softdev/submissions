from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getprofile")
def getprofile():
    print "starting getprofile"

    file = open("MOCK_DATA.csv", 'r')
    lines = file.readlines() #realines() should return list of lines
    linelist = []
    for line in lines:
        newlist = line.split(',')
        linelist.append(newlist)

    #it works! print linelist
    
    print "ending getprofile"
    return "profile"


if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
