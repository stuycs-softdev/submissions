from flask import Flask, render_template, session, redirect,url_for, request



app = Flask(__name__)

@app.route("/inc")
def inc():
    s=""
    if 'w' not in session:
        session['w']={}
    w=session['w']
    #for(x in w.keys()):
        #s+=x
        #s+="<br>"
    session['w']=w
    if 'n' not in session:
        session['n']=0
    n=session['n']
    n=n+1
    session['n']=n
    print "From a session:",n
    return render_template("counter.html",n=n,w=w.keys())

@app.route("/register")
def register():
    newphone = request.args.get('phone')
    print newphone
    w=session['w']
    w[newphone]=newphone
    session['w']=w
    return redirect("/inc")

@app.route("/")
def index():
    return '<h1>Welcome to the Cell Phone Registry.</h1><br><button><a href="/inc">Register Cell Phones</a></button><body background="http://pre15.deviantart.net/d776/th/pre/i/2011/343/f/b/seamless_metal_plate_by_hhh316-d4ink0a.jpg">'

@app.route("/reset")
def reset():
    session['n']=0
    session['w']={}
    return redirect("/inc")
                    



if __name__ == "__main__":
   app.debug = True
   app.secret_key="Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
