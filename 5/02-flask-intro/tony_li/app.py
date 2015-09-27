from flask import Flask,render_template

app=Flask(__name__)

@app.route("/home")
@app.route("/")

def home():
    return render_template("home.html")


@app.route("/about")
def about():
    aboutpage='''
    <!DOCTYPE HTML>

    <title>About</title>
    <body>
    Pokemon are very lazy creatures. They are so lazy that they don't bother with css or <br>
    any styling at all. Does that mean that I am a pokemon?<br>

    <br>

    <marquee behavior="scroll" direction="left"><img src="static/slaking.png" alt="slaking"></marquee>
    </body>
    '''
    return aboutpage


###helper

def listPKMNimg(list):
    html='''<table>'''
    for pkmn in list:
        html+='<tr><td><img src="static/'+pkmn+'.jpg"> </td></tr>'
    return html+'</table'
 
@app.route("/grass")
@app.route("/grass/")
def grass():
    grasspkmn=['bulbasaur']
   
    grass='''
    <!DOCTYPE HTML>
    
    <title>Grass </title>


    <head>
    <center><h1>Grass Pokemon</h1>
    <link rel="stylesheet" type="text/css" href="static/styles/grass.css">
    </head>
    
    <body>
    <ol>
    '''+ listPKMNimg(grasspkmn)+'''
    </ol>
    </body>
    '''
    return grass

dex={'bulbasaur':1}
moves=[['bulbasaur',[1,'Tackle'],[3,'Growl'],[7,'Leech Seed'],[9,'Vine Whip']]]
def pkdex(pocketmonster):
    return dex[pocketmonster]
    
@app.route("/grass/<pokemon>")
def pokemon(pokemon=""):
    dgrass={pokemon:pkdex(pokemon)}
    return render_template("grasspkmn.html",dgrass=dgrass,pokemon=pokemon,moves=moves)

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
    




