from flask import Flask, render_template, request, jsonify
import datetime, urllib, urllib2, json

app = Flask(__name__)

key="ecdb9f3fb43f5f8663867db2633c7638"

url = "http://api.openweathermap.org/data/2.5/weather?q=%s&units=Imperial&appid=%s"

@app.route("/weather")
@app.route("/weather/")
def weather():
    global key
    location = request.args.get("loc")
    if location is None:
        location = "NYC"
    api_call = urllib2.urlopen(url % (urllib.quote_plus(location), key))
    data = json.loads(api_call.read())
    important = {
            "name": data["name"],
            "wtype": data["weather"][0]["main"],
            "temp_min": data["main"]["temp_min"],
            "temp_max": data["main"]["temp_max"],
            "temp_curr": data["main"]["temp"],
            "humidity": data["main"]["humidity"]
            }
    return jsonify(**important)

@app.route("/")
def home():
    return render_template("index.html")

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)

