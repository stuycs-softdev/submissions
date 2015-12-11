import urllib2, time, json
from flask import Flask, render_template, request, jsonify
from ast import literal_eval

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    url="http://api.openweathermap.org/data/2.5/weather?q=10000&appid=ecdb9f3fb43f5f8663867db2633c7638&units=imperial"
    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)
    temp = r['main']['temp']
    name = r['name']
    #print r
    #print "__________________"
    #print result
    #print "-------------------"
    #return jsonify(r)
    return render_template("home.html", temp=temp, maxTemp=r['main']['temp_max'], minTemp=r['main']['temp_min'])

@app.route("/example")
def example():
    url="http://api.openweathermap.org/data/2.5/weather?q=NYC&appid=ecdb9f3fb43f5f8663867db2633c7638&units=imperial"
    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)
    temp = r['main']['temp']
    name = r['name']
    #return name + ", " + str(temp)
    return jsonify(r)

#can try testing with http://localhost:8000/results?data=Hello
@app.route("/results")
def results():
    data = request.args.get("data")
    print "data: "+data
    url="http://api.openweathermap.org/data/2.5/weather?q="+data+"&appid=ecdb9f3fb43f5f8663867db2633c7638&units=imperial"
    request2 = urllib2.urlopen(url)
    result = request2.read()
    #r = json.loads(result)
    print result
    #print "-----------------------------"
    #print result[0][0]
    return result
    #return data


if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
