from flask import Flask, render_template, request, jsonify
import random, json

app = Flask(__name__)
f = open('data.json', 'r')
data = f.read()
data = json.loads(data)
f.close()

@app.route("/", methods = ['GET', 'POST'])
def index():
    list1 = dat()
    return render_template("home.html",lastname=list1['last'],email=list1['email'],dob=list1['birth'],phonenumber=list1['phone'],creditcardnumber=list1['credit'],creditcardpin=list1['pin'],bankaccountnumber=list1['bank'],address=list1['address'],firstname=list1['first'])

@app.route("/about")
def getstuff():
    return render_template("about.html")

@app.route("/getdata")
def getdata():
    return jsonify(results=dat())

@app.route("/search")
def search():
    query = request.args.get('query').lower()
    #print request.args.keys()
    for i in data:
        if i['first'].lower() == query or i['last'].lower() == query:
            i['address'] = i['street']+', '+i['city']+', '+i['zip']
            return jsonify(results=i)
    return 'nothing'

def dat():
    info = random.choice(data)
    info['address'] = info['street']+', '+info['city']+', '+info['zip']
    return info

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
