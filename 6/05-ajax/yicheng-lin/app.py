#!/usr/bin/python
# Main server app file.

# very very crude approximation, one degree ~= 70 mi.
# cutoff radius ~= 100 mi manhattan distance
# we also assume america is flat

CUTOFF_RADIUS = 1.5

from flask import Flask, render_template, request
from utils import *

import json
import requests
import sys, csv

# nuclear plant database

plants = []

with open('nuke_clean.csv', 'rb') as f:
    reader = csv.reader(f)
    for row in reader:
        plants.append(row)

app = Flask(__name__)

@app.route("/")
def root():
  return render_template("index.html")

@app.route("/result")
def result():
    """
    result: return the result page from an query search

    Returns:
        a JSON object to pass to client side
    """
    data = request.args.get("address")
    loc = get_lat_lng(data)

    nearby_plants = []

    for plant in plants:
        if dist((float(plant[1]), float(plant[2])), (float(loc['lat']), float(loc['lng']))) < CUTOFF_RADIUS:
            quote = get_stock_quote(plant[4])
            current_price = "N/A"
            if 'LastPrice' in quote.keys():
                current_price = str(quote['LastPrice'])

            nearby_plants.append({'name':plant[0],
                                  'lat': float(plant[1]),
                                  'lng': float(plant[2]),
                                  'company': plant[3],
                                  'symbol': plant[4],
                                  'current_price': current_price})

    return json.dumps({'lat': loc['lat'], 'lng': loc['lng'],'nearby_plants':nearby_plants})

if __name__ == "__main__":
  app.debug == "--debug" in sys.argv
  app.run(host="0.0.0.0")
