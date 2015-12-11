# from flask import Flask, render_template, request
import csv, sys
counter = 1
# app = Flask(__name__)


# @app.route("/login")
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
   return profits

# @app.route("/")
def getLoss():
   f = open("static/profit.csv",'rb')
   loss = []
   try:
      reader = csv.reader(f)
      for row in reader:
         if (row[2] == '0'):
            loss.append(row[0])
   finally:
      f.close()
   return loss

def getNext():
   counter = 1
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
   return results


# if __name__ == "__main__":
#     app.debug = True
#     app.run(host="0.0.0.0",port = 8000)
