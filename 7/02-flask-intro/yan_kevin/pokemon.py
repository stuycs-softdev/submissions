from flask import Flask, render_template

poke = Flask(__name__)

@poke.route("/")
@poke.route("/home")
def home():
    page = """ 
    <h1>Pokemon Starters</h1>
    <h2>Choose a generation!</h2>
    <br>
    <button> <a href = "/gen1">Gen I</a> </button>
    <br> <br>
    <button> <a href = "/gen2">Gen II</a> </button>
    <br> <br>
    <button> <a href = "/gen3">Gen III</a> </button>
    <br> <br>
    <button> <a href = "/gen4">Gen IV</a> </button>
    <br> <br>
    <button> <a href = "/gen5">Gen V</a> </button>
    <br> <br>
    <button> <a href = "/gen6">Gen VI</a> </button>
    """
    return page

@poke.route("/gen1")
def gen1():
    dict1 = {'gen' : "Generation I" ,
             
             'grass' : "Bulbasaur" ,
             'gtype' : "Grass/Poison" ,
             'gname' : "the Seed Pokemon" ,

             'fire' : "Charmander" ,
             'ftype' : "Fire" ,
             'fname' : "the Lizard Pokemon" ,

             'water' : "Squirtle" ,
             'wtype' : "Water" ,
             'wname' : "the Tiny Turtle Pokemon"}
    return render_template("gen.html", d = dict1)

@poke.route("/gen2")
def gen2():
    dict2 = {'gen' : "Generation II" ,

             'grass' : "Chikorita" ,
             'gtype' : "Grass" ,
             'gname' : "the Leaf Pokemon" ,

             'fire' : "Cyndaquil" ,
             'ftype' : "Fire" ,
             'fname' : "the Fire Mouse Pokemon" ,

             'water' : "Totodile" ,
             'wtype' : "Water" ,
             'wname' : "the Big Jaw Pokemon"}
    return render_template("gen.html", d = dict2)

@poke.route("/gen3")
def gen3():
    dict3 = {'gen' : "Generation III" ,
             'grass' : "Treecko" ,
             'gtype' : "Grass" ,
             'gname' : "the Wood Gecko Pokemon" ,

             'fire' : "Torchic" ,
             'ftype' : "Fire" ,
             'fname' : "the Chick Pokemon" ,
             
             'water' : "Mudkip" ,
             'wtype' : "Water" ,
             'wname' : "the Mud Fish Pokemon"}
    return render_template("gen.html", d = dict3)

@poke.route("/gen4")
def gen4():
    dict4 = {'gen' : "Generation IV" ,
             'grass' : "Turtwig" ,
             'gtype' : "Grass" ,
             'gname' : "the Tiny Leaf Pokemon" ,

             'fire' : "Chimchar" ,
             'ftype' : "Fire" ,
             'fname' : "the Chimp Pokemon" ,
             
             'water' : "Piplup" ,
             'wtype' : "Water" ,
             'wname' : "the Penguin Pokemon"}
    return render_template("gen.html", d = dict4)

@poke.route("/gen5")
def gen5():
    dict5 = {'gen' : "Generation V" ,
             'grass' : "Snivy" ,
             'gtype' : "Grass" ,
             'gname' : "the Grass Snake Pokemon" ,

             'fire' : "Tepig" ,
             'ftype' : "Fire" ,
             'fname' : "the Fire Pig Pokemon" ,
             
             'water' : "Oshawott" ,
             'wtype' : "Water" ,
             'wname' : "the Sea Otter Pokemon"}
    return render_template("gen.html", d = dict5)

@poke.route("/gen6")
def gen6():
    dict6 = {'gen' : "Generation VI" ,
             'grass' : "Chespin" ,
             'gtype' : "Grass" ,
             'gname' : "the Spiny Nut Pokemon" ,

             'fire' : "Fennekin" ,
             'ftype' : "Fire" ,
             'fname' : "the Fox Pokemon" ,
             
             'water' : "Froakie" ,
             'wtype' : "Water" ,
             'wname' : "the Bubble Frog Pokemon"}
    return render_template("gen.html", d = dict6)

if __name__ == "__main__":
    poke.debug = True
    poke.run(host = '0.0.0.0', port = 8000)
