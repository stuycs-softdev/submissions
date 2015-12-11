from flask import Flask, render_template, url_for
from flask.json import jsonify
import os.path, urllib, urllib2, json

app = Flask(__name__)
KEYS = open('./keys').readlines()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/explore')
@app.route('/explore/')
def explore():
    data = urllib2.urlopen(
        'https://api.foursquare.com/v2/venues/explore?{}'.format(urllib.urlencode([
            ('near', 'New York, NY'),
            ('client_id', KEYS[0]),
            ('client_secret', KEYS[1]),
            ('v', '20151210'),
            ('m', 'foursquare'),
        ])))
    return data.read()

if __name__ == '__main__':
    app.debug = True
    app.secret_key = 'w34tr98uarn pahesitr ga e'
    app.run(
        host='0.0.0.0',
        port=8080 if os.path.isfile('./cloudy') else 8000,
    )