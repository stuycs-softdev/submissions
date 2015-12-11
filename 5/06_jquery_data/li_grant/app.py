from flask import Flask, render_template, request, jsonify
import time, json
from random import randrange
app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")


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

        first = request.args.get('first')
        last = request.args.get('last')

        if first != '':
            for person in data:
                if person['first'] == first:
                    return jsonify(person)

        if last != '':
            for person in data:
                if person['last'] == last:
                    return jsonify(person)

        return 'Not Found'



if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0", port = 8000)
