from flask import Flask, render_template, request
import utils
import json

app = Flask(__name__)

@app.route("/")
def index():
        listnames = utils.get_listnames()
        return render_template("index.html", listnames = listnames)


@app.route("/getlist")
def getlist():
        listname = request.args.get("lname");
        sortby = request.args.get("sort");
        l = utils.get_list(listname, sortby);
        return json.dumps(l)
        
if __name__ == "__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
