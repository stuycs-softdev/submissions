from flask import Flask, render_template, request, session, redirect, url_for
import utils
app = Flask(__name__)

# define the directory for the app
@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="GET":
        if 'un' in session and session['un'] != 0:
            user = session['un']
            return render_template("login.html",un=user)
        else:
            return render_template("login.html",unlogged="You are not currently logged in.")
    else:
        button = request.form['button']
        user = request.form['username']
        passwd = request.form['password']
        if button=="logout":
            session['un'] = 0
            session['pw'] = 0
            return render_template("home.html")
        else:
            if utils.loginauth(user,passwd):
                session['un'] = user
                session['pw'] = passwd
                return redirect(url_for("home"))
            else:
                error = "INVALID USERNAME AND/OR PASSWORD"
                return render_template("login.html",error=error)
                #url_for only takes 1 arg
                #return redirect(url_for("error",error))

#@app.route("/error")
#def error(error):
#    return render_template("error.html",error)

@app.route("/about")
def about():
    if 'un' in session and session['un'] != 0:
        user = session['un']
        return render_template("about.html",un=user)
    else:
        return render_template("about.html")

@app.route("/lucky")
def lucky():
    import random
    r = random.randrange(1,100)
    if 'un' in session and session['un'] != 0:
        user = session['un']
        return render_template("lucky.html",random=r,un=user)
    else:
        return render_template("lucky.html",random=r)

@app.route("/artist/",methods=["GET","POST"])
#@app.route("/artist/<name>",methods=["GET","POST"])
def artist(name=""):
    if 'un' not in session or session['un']==0:
        return redirect(url_for("home"))
        #return render_template("home.html",error=error)
    d = utils.returnd()
    d2 = utils.returnartists()
    if request.method=="GET":
        return render_template("artist.html",dic=d2,stagename="artists",un=session['un'])
    else:
        person = request.form["button"]
        if utils.validate(person):
            return render_template("artist.html",dic=d,stagename=person)
        else:
            return render_template("artist.html",dic=d2,stagename="artists")

@app.route("/home")
@app.route("/")
# define a function to be run everytime someone goes to your app
#      returns a string that represents the homepage
def home():
    if 'un' in session and session['un'] != 0:
        user = session['un']
        return render_template("home.html",un=user)
    else:
        return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.secret_key="hello world"
    app.run(host='0.0.0.0',port=8000)
    # accessible on 'localhost:8000'
