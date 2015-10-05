from flask import Flask, render_template, session, redirect,url_for



app = Flask(__name__)

@app.route("/inc")
def inc():
    if 'w' not in session:
        session['w']=0
    w=session['w']
    w=w+1
    session['w']=w
    if 'n' not in session:
        session['n']=0
    n=session['n']
    n=n+1
    session['n']=n
    print "From a session:",n
    return render_template("counter.html",n=n,w=w)

@app.route("/")
def index():
    return '<h1>Welcome to the Cell Phone Registry.</h1><br><button><a href="/inc">Register Cell Phones</a></button><body background="http://pre15.deviantart.net/d776/th/pre/i/2011/343/f/b/seamless_metal_plate_by_hhh316-d4ink0a.jpg">'

@app.route("/reset")
def reset():
    session['n']=0
    session['w']=0
    return redirect("/inc")
                    



if __name__ == "__main__":
   app.debug = True
   app.secret_key="Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
