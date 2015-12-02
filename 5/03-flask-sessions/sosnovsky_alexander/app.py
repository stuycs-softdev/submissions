from flask import Flask, render_template, session, redirect,url_for, request
import urllib
import ast

app = Flask(__name__)

@app.route("/inc")
def inc():
    s=""
    if 'w' not in session:
        session['w']={}
    w=session['w']
    wk = w.keys()
    for x in wk:
        s+="<br>"
        s+=x
        s+="<br>"
        f = urllib.urlopen("https://ajax.googleapis.com/ajax/services/search/images?q="+x+"&v=1.0")
        g = f.read()
        boo = False
        cnt = 0
        endcnt = 5
        while boo == False:
            if g[cnt] == '.':
                if g[cnt+1] == 'j':
                    if g[cnt+2] == 'p':
                        if g[cnt+3] == 'g':
                            endcnt = cnt+4
                            boo = True
            if boo == False:
                cnt = cnt+1
        bcc = False
        while bcc == False:
            if g[cnt] == '"':
                bcc = True
                cnt = cnt+1
            else:
                cnt = cnt-1
        print g[cnt:endcnt]
        s+='<img src="'+g[cnt:endcnt]+'" width="50%"><br>'
    session['w']=w
    if 'n' not in session:
        session['n']=0
    n=session['n']
    n=n+1
    session['n']=n
    print "From a session:",n
    return render_template("counter.html",n=n,w=s)

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
    return '<font color="white"><h1>Welcome to the Cell Phone Registry.</font></h1><br><button><a href="/inc">Register Cell Phones</a></button><body background="http://silviahartmann.com/background-tile-art/images/black_woven_seamless_tile.jpg">'

@app.route("/reset")
def reset():
    session['n']=0
    session['w']={}
    return redirect("/inc")
                    



if __name__ == "__main__":
   app.debug = True
   app.secret_key="Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
