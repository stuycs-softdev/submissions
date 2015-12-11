from flask import Flask, render_template,request
import time, json, readfile

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/search")
def search():
    name = request.args.get("name")
    profile = readfile.searchpokemon(name)
    return json.dumps(profile)

@app.route("/random")
def random():
    profile = readfile.randompokemon()
    return json.dumps(profile)
    
if __name__ == "__main__":
   app.debug = True
   app.run()
