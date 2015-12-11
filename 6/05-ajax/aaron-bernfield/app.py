from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/<name>")
def search(name):
    d = {}
    output = ""
    f = open('MOCK_DATA.csv','r')
    buffer2 = f.read()
    buffer2 = buffer2.split("\n")
    for item in buffer2:
        city = item.split(",")
        d[city[0]]=city[1:]
    if name in d.keys():
        output = output + "City:" + name + ","
        output = output + "Current Temperature:" + d[name][0] + ","
        output = output + "Wind Speed:" + d[name][1] + ","
        output = output + "Weather:" + d[name][2] + ","
        output = output + "Chance of Rain:" + d[name][3] + ","
    else:
        output = "Invalid City"
    #print output
    return render_template("results.html",info = output)
    #print d.keys()

#search('Nueva Requena')
#search('Salimbalan')
        

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
