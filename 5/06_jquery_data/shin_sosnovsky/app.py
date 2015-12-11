from flask import Flask, render_template,request
import random, json

app = Flask(__name__)
f = open('data.json', 'r')
data = f.read()
data = json.loads(data)
f.close()

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/about")
def getstuff():
    return render_template("about.html")

@app.route("/getdata")
def getdata():
    info = random.choice(data)
    info['address'] = info['street']+', '+info['city']+', '+info['zip']
    return data

@app.route("/search")
def search():
    query = request.args.get('query').lower()
    for i in data:
        if i['first'].lower() == query or i['last'].lower() == query:
            i['address'] = i['street']+', '+i['city']+', '+i['zip']
            return i
    return 'nothing'

@app.route("/upcase")
def upcase():
    data = request.args.get("data")
    print data
    result = {'original' : data,
            'result':data.upper()}
    return json.dumps(result)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
