from flask import Flask, render_template, request
import csv, sys, json
counter = 1
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
   return render_template("home.html")


@app.route("/getProfit")
def getProfit():
   f = open("static/profit.csv",'rb')
   profits = []
   try:
      reader = csv.reader(f)
      for row in reader:
         if (row[2] == '1'):
            profits.append(row[0])
   finally:
      f.close()
   return JSON.parse(profits)

@app.route("/getLose")
def getLose():
   f = open("static/profit.csv",'rb')
   loss = []
   try:
      reader = csv.reader(f)
      for row in reader:
         if (row[2] == '0'):
            loss.append(row[0])
   finally:
      f.close()
   return JSON.parse(loss)

@app.route("/getNext")
def getNext():
   global counter
   myreader = []
   results = []
   f = open("static/profit.csv",'rb')
   try:
      reader = csv.reader(f)
      for row in reader:
         myreader.append(row)
      if (myreader[counter][2] == '0'):
         delta = "-"
         delta = delta + myreader[counter][1]
      results.append(myreader[counter][0])
      results.append(delta)
   finally:
      f.close()
   counter = counter + 1
   return JSON.parse(results)


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port = 8000)
