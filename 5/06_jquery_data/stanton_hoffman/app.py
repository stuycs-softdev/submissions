from flask import Flask, render_template,request, redirect, url_for, session
import time, json
import data

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/searchpokemon")
def search():
	name = request.args.get("name")
	pokemon = data.searchpokedeck(name)
	return json.dumps(pokemon)

@app.route("/randompokemon")
def profile():
    pokemon = data.randompokemon()
    return json.dumps(pokemon)
    
if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)