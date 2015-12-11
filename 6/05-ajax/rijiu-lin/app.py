from flask import Flask, render_template, request, jsonify
import random, json, re

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/distance")
def distance():
    start = request.args.get("start")
    end = request.args.get("end")
    return google.maps.geometry.spherical.computeDistanceBetween(start, end)

@app.route("/getCoordinates")
def getPlace():
    file = open("cities15000.txt","r")
    text = file.read()
    #text = text.replace('\r\n','')
    pattern = re.compile("[^\t]+")
    print pattern.findall(text)
    file.close()
    coord = {'lat':random.uniform(-30,75),'lng':random.uniform(-125,125)}
    return jsonify(coord)

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
