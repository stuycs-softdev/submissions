from flask import Flask, render_template,request
import time, json

app = Flask(__name__)


@app.route("/")
def index():
    if request.method == "GET":
        return render_template("index.html")
    data = request.args.get("search")
    print(data)
    return render_template("index.html")


    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
