from flask import Flask, render_template
import csv, random

app = Flask(__name__)

@app.route("/")
@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/names")
def names():
    reader = csv.reader(open("names.csv"))
    rownum = random.randrange(0,100)
    count = 0
    name = ""
    for row in reader:
        if count == rownum:
            name = row[1]+" "+row[2]
            break
        else:
            count+=1
            
    return name

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)

        


        
