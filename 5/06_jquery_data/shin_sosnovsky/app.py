from flask import Flask, render_template,request
import random, json

app = Flask(__name__)
f = open('templates/data.json', 'r')
data = f.read()
data = json.loads(data)
f.close()

@app.route("/")
def index():
    list1 = getdata()
    return render_template("home.html",lastname=list1['last'],email=list1['email'],dob=list1['birth'],phonenumber=list1['phone'],creditcardnumber=list1['credit'],creditcardpin=list1['pin'],bankaccountnumber=list1['bank'],address=list1['address'],firstname=list1['first'])

@app.route("/about")
def getstuff():
    return render_template("about.html")

@app.route("/getdata")
def getdata():
    info = random.choice(data)
    info['address'] = info['street']+', '+info['city']+', '+info['zip']
    return info

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
