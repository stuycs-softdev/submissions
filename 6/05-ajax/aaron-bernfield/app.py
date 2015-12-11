from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("home.html")

@app.route("/<name>")
def search():
    d = {}
    f = open('MOCK_DATA.csv','r')
    buffer2 = f.read()
    f.close()
    buffer2 = buffer2.split("\n")
    for item in buffer2:
        item = item.split(",")
    print buffer2
            
        
        

if __name__ == "__main__":
   search()
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
