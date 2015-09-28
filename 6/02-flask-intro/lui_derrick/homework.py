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
def cameragenerator(brandname="",modelname=""):
    d = {"brand":brandname,
         'model':modelname}
    d['title'] = "Camera Generator"
    return render_template("cameragen.html",d=d)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


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

