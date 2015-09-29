from flask import Flask,render_template,request

app=Flask(__name__)

dex={
    'bulbasaur':1,
    'ivysaur':2,
    'venusaur':3,
    'charmander':4,
    'charmeleon':5,
    'charizard':6,
    'squirtle':7,
    'wartortle':8,
    'blastoise':9
}

@app.route("/home", methods=['GET', 'POST'])
@app.route("/")



def home():
    if request.method=='GET':
        return render_template("home.html")
    else:
        ID=int(request.form['id'])
        button=request.form['button']
        return render_template("home.html", ID=ID, dex=dex )
       
        

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
    <button><a href="/home"> Home</a></button>
    </body>
    '''
    return aboutpage


###helper

def listPKMNimg(list):
    html='''<table>'''
    for pkmn in list:
        html+="<tr><td><img src=static/"+pkmn+"> </td></tr>"
    return html+'</table>'
 
@app.route("/grass")
@app.route("/grass/")
def grass():
    grasspkmn=['bulbasaur']
    return render_template("grass.html", grasspkmn=grasspkmn)


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
    




