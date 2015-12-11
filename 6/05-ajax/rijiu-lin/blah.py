from flask import Flask, render_template, request, jsonify
import random, json, re
from math import radians, cos, sin, asin, sqrt

app = Flask(__name__)
global cities

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
    coords = cities[random.randint(0,len(cities)-1)].split('\t')
    c = {'lat':coords[0],'lng':coords[1]}
    return jsonify(c)

if __name__ == "__main__":
    f = open('cities15000.txt', 'r')
    cities = f.read().split('\n')
    f.close()
    app.debug = True
    app.run(host = "0.0.0.0", port=8000)
