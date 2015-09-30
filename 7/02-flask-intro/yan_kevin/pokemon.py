from flask import Flask, render_template, request, session, redirect, url_for
import util

poke = Flask(__name__)
poke.secret_key = "Viridian"

@poke.route("/")
@poke.route("/home")
def home():
    return render_template("home.html")

@poke.route("/about")
def about():
    return render_template("about.html")

@poke.route("/login", methods = ["GET", "POST"])
def login():
    if' message' in session:
        m = session['message']
        session['message'] = ""
    else:
        m=""
    if request.method == "GET":
        return render_template("login.html", m = m)
    else:
        f = request.form
        username = f['u']
        password = f['p']
        if util.auth(username,password):
            session["u"] = "logged in"
            return redirect(url_for("secret"))
        else:
            return render_template("login.html", error = "Urine trouble now")

@poke.route("/logout")
def logout():
    if "u" in session:
        session["u"] = "not logged in"
        session["message"] = "Logged Out!"
    return redirect(url_for("login"))
    
@poke.route("/secret")
def secret():
    if "u" in session and session['u'] == "logged in":
        return render_template("secret.html")
    else:
        return redirect(url_for("login"))
        
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
