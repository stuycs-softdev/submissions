from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)
data = []
number = 0
file = open("MOCK_DATA.csv", 'r')
lines = file.readlines() #realines() should return list of lines
for line in lines:
    newlist = line.split(',')
    data.append(newlist)
    
    file.close()
    #print data
#print number
#it works! print linelist

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getprofile")    #####puts csv data into global variable data
def getprofile():
    print "starting getprofile"

    print "ending getprofile"
    return "profile"
    #return data

@app.route("/getdata")      ######returns a line from global variable data
def getdata():
    print "starting getdata"
    #########################
    #print data              #no longer empty
    print "yo"
    print "yo"
    print "yo"
    print "yo"
    print "yo"
    print "yo"
    print "yo"
    
    line = data[number]     #for some reason, number is a local variable
    number += 1
    print "ending getdata"
    if counter > 99:
        return
    return line


if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
