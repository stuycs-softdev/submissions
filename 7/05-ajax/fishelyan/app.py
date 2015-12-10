from flask import Flask, render_template
import csv

app = Flask(__name__)

@app.route("/")
def index():
    return render.template("index.html")

@app.route("/names")
def names():
    page=""
    return page

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)

reader=csv.DictReader(open("names.csv"))
page=""
for row in reader:
    for item in row:
        page=page+item

print page

        


        
