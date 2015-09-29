from flask import Flask, render_template

app = Flask(__name__)
@app.route("/randomnum")
def randomnum():
    import random
    r = random.randrange(1,1000)
    #page = """
    #<link type="text/css" rel="stylesheet" href="/static/main.css"/>
    #<h1>Random number!<h1>
    #<hr>
    #<h2>Here you are: %d <h2>
    #"""%(number)
    return render_template("randomnum.html",number=r)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/cameragen")
@app.route("/cameragen/<brandname>")
@app.route("/cameragen/<brandname>/<modelname>")
def cameragenerator(brandname="",modelname=""):
    d = {"brand":brandname,
         'model':modelname}
    d['title'] = "Camera Generator"
    return render_template("cameragen.html",d=d)

@app.route("/formstuff")
def formstuff():
    return render_template("formstuff.html")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        uname = request.form['username']
        pword = request.form['password']
        button = request.form['button']
        if button == "cancel":
            return render_template("login.html")
        if utils.authenticate(uname,pword):
            return "<h1>Logged in</h1>"
        else:
            error = "Invalid username or password"
            return render
        return "TRYING TO LOG IN!"

@app.route("/")
@app.route("/home")
def home():
    #print request.args.get("name")
    return render_template("home.html",args=request.args)


#def home():
#    page = """
#    <link type="text/css" rel="stylesheet" href="/static/main.css"/>
#    <h1> This is my website! </h1>
#    <hr>
#    <h2> Other places on my site:</h2>
#    <ul>
#      <li><a href="randomnum">Random Number</a></li>
#      <li><a href="about">About</a></li>
#    </ul>
#    """
#    return page

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)

