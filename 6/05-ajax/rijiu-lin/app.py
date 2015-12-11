from flask import Flask, render_template, request
import random, json

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
    coord = {'lat':random.randint(-89,90),'lng':random.randint(-89,90)}
    return coord

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
