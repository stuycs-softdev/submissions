from flask import Flask, render_template, request
from flask import session, redirect, url_for
from random import randint
import util


app = Flask(__name__)


@app.route("/home")
@app.route("/home/<fullname>")
def home(fullname=None):
    if 'loggedin' in session:
        d = {}
        candidates = ['Joe Biden', 'Lincoln Chafee', 'Hilary Clinton','Bernie Sanders',
                 'Jeb Bush', 'Ben Carson', 'Chris Christie','Ted Cruz','Carly Fiorina',
                 'Donald Trump']
        error = ""
        if request.args.get("first") != None:
            if request.args.get("first") != '' and request.args.get("last") != '':
                newCand = request.args.get("first") + ' ' + request.args.get("last")
                fullname = newCand
            else:
                error = "Error, You must submit both names"
        if fullname == None:
            fullname = candidates[randint(0,len(candidates))-1]
        boss = candidates[randint(0,len(candidates))-1] 
        d = {'full':fullname,
            'last':fullname.split()[1],        
            'boss':boss}
        return render_template('home.html', names = d, candidates = candidates,error=error)
    return redirect(url_for("about"))

@app.route("/")
@app.route("/about")
def about():
    if 'loggedin' in session:
        return render_template("about.html", loggedin = session['loggedin'])
    return render_template("about.html")

@app.route("/login", methods=['GET','POST'])
def login():
    if request.method == 'POST':
        username = request.form['user']
        password = request.form['pswd']
        if util.authenticate(username,password):
            session['loggedin'] = True
            return redirect(url_for("home"))
        else:
            return render_template('login.html', error="Username and Password do not match")
    return render_template('login.html')

@app.route("/logout")
def logout():
    session.pop('loggedin')
    return redirect(url_for("about"))

@app.route("/rabbit/")
@app.route("/rabbit/<color>")
def rabbit(color=None):
    if 'loggedin' in session:
        if color == None:
            color = util.ranColor()
        elif color == "blue":
            color = "#3399FF"
        return render_template('rab.html', c = color)
    return redirect(url_for("about"))

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "secret"
    app.run(host='0.0.0.0', port=8000)

