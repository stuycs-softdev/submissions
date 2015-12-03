from flask import Flask,render_template,request,session,redirect

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
    'blastoise':9,
    'chikorita':152,
    'treecko':252,
    'turtwig':387,
    'snivy':495,
    'chespin':650
}


@app.route("/home", methods=['GET', 'POST'])
@app.route("/")



def home():
    
    if 'n' not in session:
        session['n']=0
        n=session['n']
    else:
        n=session['n']
    if request.method!='GET':
        n=session['n']
        ID=int(request.form['id'])
        button=request.form['button']
        
            
        return render_template("home.html", ID=ID, dex=dex,n=n)
    return render_template("home.html",n=n)
        

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

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/home")

###helper

def listPKMNimg(list):
    html='''<table>'''
    for pkmn in list:
        html+="<tr><td><img src=static/"+pkmn+"> </td></tr>"
    return html+'</table>'
 
@app.route("/grass")
@app.route("/grass/")
def grass():
    if session['n']==2:
        grasspkmn=['bulbasaur','chikorita','treecko','turtwig','snivy','chespin']
        return render_template("grass.html", grasspkmn=grasspkmn)
    else:
        return redirect("/login")
       


moves=[['bulbasaur',[1,'Tackle'],[3,'Growl'],[7,'Leech Seed'],[9,'Vine Whip']],
['chikorita',[1,'Tackle'],[1,'Growl'],[6,'Razor Leaf'],[9,'Poison Powder']],
['treecko',[1,'Pound'],[1,'Leer'],[5,'Absorb'],[9,'Quick Attack']],
['turtwig',[1,'Tackle'],[5,'Withdraw'],[9,'Absorb'],[13,'Razor Leaf']],
['snivy',[1,'Tackle'],[4,'Leer'],[7,'Vine Whip'],[10,'Wrap']],
['chespin',[1,'Tackle'],[3,'Growl'],[5,'Vine Whip'],[8,'Rollout']]]
def pkdex(pocketmonster):
    return dex[pocketmonster]
    
@app.route("/grass/<pokemon>")
def pokemon(pokemon=""):
    dgrass={pokemon:pkdex(pokemon)}
    return render_template("grasspkmn.html",dgrass=dgrass,pokemon=pokemon,moves=moves)

<<<<<<< HEAD
@app.route("/login",methods=['GET','POST'])

def login():
    if 'n' not in session:
    session['n']=0
    if request.method=='POST':
        session['n']=1
        
    
=======
@app.route("/login", methods=['GET','POST'])

def login():
    success=""
    if request.method=='POST':
        if request.form['user']!="Pokemon" or request.form['pass']!="Master":
            success="Invalid User or Pass"
            session['n']=0
        else:
            success="Success!"
            session['n']=2
    return render_template("login.html",success=success)
        


>>>>>>> 33b08731379ca1b24e696781ea641558019cd62c
if __name__=="__main__":
    app.debug = True
    app.secret_key="Don't upload to github"
    app.run(host='0.0.0.0', port=8000)
    




