from flask import Flask, render_template, request
import datetime, urllib2, json

app = Flask(__name__)

key="ecdb9f3fb43f5f8663867db2633c7638"

url = "http://api.openweathermap.org/data/2.5/weather?q=%s&units=Imperial&appid=%s"

@app.route("/")
def index():
    global key
    location = request.args.get("loc")
    if location is None:
        location = "New York"
    api_call = urllib2.urlopen(url % (location, key))
    data = json.loads(api_call.read())
    return data

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)

