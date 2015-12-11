from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    d = {}
    output = ""
    f = open('MOCK_DATA.csv','r')
    buffer2 = f.read()
    buffer2 = buffer2.split("\n")
    for item in buffer2:
        city = item.split(",")
        d[city[0]]=city[1:]
    return render_template("home.html", d=d.keys())

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
        output = output + "<b>City: </b>" + name + "<br>"
        output = output + "<b>Current Temperature: </b>" + d[name][0] + " degrees Celcius <br> "
        output = output + "<b>Wind Speed: </b>" + d[name][1] + "mph <br> "
        output = output + "<b>Weather: </b>" + d[name][2] + "<br> "
        output = output + "<b>Chance of Rain: </b>" + d[name][3] + "% <br> "
        return output

    output = "<b>Invalid City<b>"
    return output

#search('Nueva Requena')
#search('Salimbalan')
        

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
