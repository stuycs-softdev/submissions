from flask import Flask, render_template, request, jsonify
from math import radians, cos, sin, asin, sqrt
import random, json

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html");

@app.route("/distance")
def distance():
    lat1 = radians(float(request.args.get("lat1").encode('ascii', 'ignore')))
    lon1 = radians(float(request.args.get("lon1").encode('ascii', 'ignore')))
    lat2 = radians(float(request.args.get("lat2").encode('ascii', 'ignore')))
    lon2 = radians(float(request.args.get("lon2").encode('ascii', 'ignore')))
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a))
    r = 6371
    return str(c * r)

@app.route("/getCoordinates")
def getPlace():
    coord = {'lat':random.uniform(-30,75),'lng':random.uniform(-125,125)}
    return jsonify(coord)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)
