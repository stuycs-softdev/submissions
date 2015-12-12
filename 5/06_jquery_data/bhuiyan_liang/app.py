from flask import Flask, render_template, request, jsonify
from random import randrange
import time, json

app = Flask(__name__)

@app.route("/",methods=['GET','POST'])
def home():
    return render_template("index.html");
    
@app.route("/random")
def random():
    with open('static/data.json') as data_file:
        data = json.load(data_file)
        i = randrange(0,len(data))
        return jsonify(data[i])

@app.route("/search")
def search():
    with open('static/data.json') as data_file:
        data = json.load(data_file)
        first_name = request.args.get('first') 
        last_name = request.args.get('last')
        if first_name != '':
            for person in data:
                if person['first_name'] == first_name:
                    return jsonify(person)

        if last_name != '':
            for person in data:
                if person['last_name'] == last_name:
                    return jsonify(person)

        return 'Person Not Found'


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
