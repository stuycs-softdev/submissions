from flask import Flask, render_template
import utils
import json

app = Flask(__name__)

@app.route("/")
def index():
        listnames = utils.get_listnames()
        return render_template("index.html", listnames = listnames)


        
        
if __name__ == "__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
