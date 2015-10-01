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

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for('home'))

@app.route("/index")
def index():
    if 'uname' in session.keys() and 'pword' in session.keys():
        if session['uname']=="Doctor" and session['pword']=="shaco":
            return render_template("index.html",name=session['uname'])
        else:
            session.clear()
            return render_template("index2.html")
    else:
        return redirect(url_for('home'))

@app.route("/asking", methods=["GET","POST"])
def ask():
    if 'uname' in session.keys() and 'pword' in session.keys():
        if request.method=="GET":
          	    word = ""
        else:
            word = request.form["ask"]
        d = {};
        d['knife'] = "A useful toy. It can bring suffering... or relief. Have you ever tried juggling several of them at once?"
        d['friend'] = "I have no friends, only acquantances. As soon as you feel like you can call someone a friend, that's when they can stab you in the back."
        d['box'] = "A present? How sweet. I love surprises. But it seems like few others I've met do... I wonder why..."

        import random
        quotes = [];
        quotes.append("We all wear masks, and the time comes when we cannot remove them without removing some of our own skin.")
        quotes.append("We understand how dangerous a mask can be. We all become what we pretend to be.")
        quotes.append("Nothing is more real than the masks we make to show each other who we are.")
        quotes.append("An honest enemy is better than a friend who lies.")
        quotes.append("Who knows what's behind that smile?")
        quotes.append("Why so serious?")
        s = quotes[random.randrange(0,len(quotes))]

        return render_template("ask.html", d = d, word = word, s=s)
    else:
        return redirect(url_for('home'))

if __name__=="__main__":
    app.debug = True
    app.secret_key="Evil Laughter"
    app.run(host='0.0.0.0',port=8000)
