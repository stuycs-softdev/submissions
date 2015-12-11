# Library/Package Imports
import json
from flask import Flask, render_template, request
import random

# File Imports
import utils

app = Flask(__name__)

# Routes
@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/searchbyid")
def search_by_id():
    pokemon_id = request.args.get("searchIDBox")
    print pokemon_id
    pokemon = utils.get_pokemon_by_id(pokemon_id)
    return json.dumps(pokemon)

@app.route("/searchbyname")
def search_by_name():
    pokemon_name = request.args.get("searchNameBox").lower()
    pokemons = utils.get_pokemons_by_name(pokemon_name)
    return json.dumps(pokemons)

@app.route("/randomprofile")
def random_profile():
    pokemon_id = request.args.get("randomProfileBox")
    pokemon = utils.get_pokemon_by_id(pokemon_id)
    return json.dumps(pokemon)

# Main
if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
