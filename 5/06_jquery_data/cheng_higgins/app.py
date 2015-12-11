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

@app.route("/picture")
@app.route("/picture/")
def get_picture():
    condition = request.args.get("condition")
    if condition is None:
        condition = "CLEAR"
    condition = condition.upper()
    if "CLEAR" in condition:
        return jsonify(url="http://www.gannett-cdn.com/-mm-/e91a8aed602b188334086e73a7d6271722176e94/c=20-0-610-444&r=x404&c=534x401/local/-/media/Pensacola/Pensacola/2014/07/17/1405600360000-sun.jpg")
    elif "CLOUD" in condition:
        return jsonify(url="http://miriadna.com/desctopwalls/images/max/Soft-silver-clouds.jpg")
    elif "RAIN" in condition:
        return jsonify(url="http://www.sampletekk.com/image/data/product_desc/Rain%20Piano%20MkII/050713rain-620x413.jpg")
    elif "FOG" in condition or "HAZE" in condition or "HAZY" in condition or "MIST" in condition:
        return jsonify(url="https://upload.wikimedia.org/wikipedia/en/6/60/Faisal_Mosque_10.jpg")
    elif "SNOW" in condition or "HAIL" in condition:
        return jsonify(url="http://static1.verbinet.com/image_uploader/photos_2d/medium/generic-snow-in-the-air.jpg")
    elif "STORM" in condition:
        return jsonify(url="http://www.nbnweathershots.com.au/sites/default/files/Greg%20Denford/DSC_0137.jpg")
    else:
        return jsonify(url="https://bradleysjohns.files.wordpress.com/2015/01/438078.jpg")

@app.route("/")
def home():
    return render_template("index.html")

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)

