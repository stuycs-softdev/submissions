from flask import Flask, render_template

poke = Flask(__name__)

@poke.route("/")
@poke.route("/home")
def home():
    page = """ 
    <h1>Pokemon Starters</h1>
    <h2>Choose a generation!</h2>
    <br>
    <a href = "/gen1">Gen 1</a> 
    <br> <br>
    <a href = "/gen2">Gen 2</a>
    <br> <br>
    <a href = "/gen3">Gen 3</a>
    """
    return page

@poke.route("/gen1")
def gen1():
    page = """
    <h1>Generation 1</h1>
    <br>
    <p> <b>Bulbasaur</b><br>
    Grass/Poison</p>
    <hr>
    <p> <b>Charmander</b><br>
    Fire</p>
    <hr>
    <p> <b>Squirtle</b><br>
    Water</p>
    <br>
    
    <a href = "/gen2">Next</a>
    <hr>
    <a href = "/home">Home</a>
    """
    return page

@poke.route("/gen2")
def gen2():
    page = """
    <h1>Generation 2</h1>
    <br>
    <p> <b>Chikorita</b><br>
    Grass</p>
    <hr>
    <p> <b>Cyndaquil</b><br>
    Fire</p>
    <hr>
    <p> <b>Totodile</b><br>
    Water</p>
    <br>
    
    <a href = "/gen1">Prev</a> <a href = "/gen3">Next</a>
    <hr>
    <a href = "/home">Home</a>
    """
    return page


@poke.route("/gen3")
def gen3():
    page = """
    <h1>Generation 3</h1>
    <br>
    <p> <b>Treecko</b><br>
    Grass</p>
    <hr>
    <p> <b>Torchic</b><br>
    Fire</p>
    <hr>
    <p> <b>Mudkip</b><br>
    Water</p>
    <br>
    
    <a href = "/gen2">Prev</a>
    <hr>
    <a href = "/home">Home</a>
    """
    return page

if __name__ == "__main__":
    poke.debug = True
    poke.run(host = '0.0.0.0', port = 8000)
