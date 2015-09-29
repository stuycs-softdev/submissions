from flask import Flask, render_template, request
import authen

app = Flask(__name__)


@app.route("/login",methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        username = request.form['username']
        password = request.form['password']
        button = request.form['button']
        if button=="cancel":
            return render_template("login.html")
        if utils.authenticate(username,passwordword):
            return "<h1>Logged in</h1>"
        else:
            error = "Bad username or password"
            return render_template("login.html",err=error)

@app.route("/")
def index():
    print request.args
    print request.args.get("size")
    return render_template("index.html",args=request.args)

@app.route("/profile")
@app.route("/profile/")
@app.route("/profile/<lastname>")
@app.route("/profile/<lastname>/<firstname>")
@app.route("/profile/<lastname>/<firstname>/<title>")
def profile(lastname="",firstname="",title=""):
    return render_template("profile.html",firstname=firstname,lastname=lastname,title=title)

@app.route("/nameTable")
@app.route("/nameTable/")
@app.route("/nameTable/<lastname>/<firstname>/<title>")
def nameTable(lastname="",firstname="",title=""):
    dictionary = {'last' : lastname,
                  'first' :firstname,
                  'title' :title}
    return render_template("nameTable.html",d=dictionary)

@app.route("/random")
def random():
    import random
    num = random.randrange(0,100)
    return render_template("random.html", n = num)

@app.route("/table")
def table():
    return render_template("table.html")

app.debug = True
app.run(host="0.0.0.0",port=8000)
