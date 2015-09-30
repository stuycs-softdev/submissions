from flask import Flask, render_template, request, session
from flask import redirect, url_for
app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
@app.route("/home", methods=["GET","POST"])
def home():
    if request.method=="GET":
        if 'uname' in session.keys() and 'pword' in session.keys():
            return redirect(url_for('index'))
        return render_template("home.html")
    else:
        session['uname'] = request.form['username']
        session['pword'] = request.form['password']
        return redirect(url_for('index'))

@app.route("/index")
def index():
    if session['uname']=="ray" and session['pword']=="shaco":
        return render_template("index.html",name=session['uname'])
    else:
        session.clear()
        return render_template("index2.html")

@app.route("/asking", methods=["GET","POST"])
def ask():
    if request.method=="GET":
        if 'uname' in session.keys() and 'pword' in session.keys():
      	    word = ""
	else:
            return redirect(url_for("home.html"))
    else:
        word = request.form["ask"]
    d = {};
    d['knife'] = "A useful toy. It can bring suffering... or relief. Have you ever tried juggling several of them at once?"
    d['friend'] = "I have no friends, only acquantances. As soon as you feel like you can call someone a friend, that's when they can stab you in the back."
    d['box'] = "A present? How sweet. I love surprises. But it seems like few others I've met do... I wonder why..."
    print "WORKS"
    return render_template("ask.html", d = d, word = word)

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
