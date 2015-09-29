from flask import Flask, render_template, request
from random import randrange
import util

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    page= "<h1>Welcome To Swaglandia</h1>"
    page = page + '<button><a href="/disneyNames">Disney Names</a></button>'
    page = page + '<button><a href="/playerProfile">Player Profile</a></button>'
    page = page + '<button><a href="/index">Index</a></button>'
    return page

@app.route("/disneyNames")
def disneyNames():
    return render_template("disneyNames.html")

@app.route("/playerProfile")
@app.route("/playerProfile/")
@app.route("/playerProfile/<lastname>")
@app.route("/playerProfile/<lastname>/<firstname>")
@app.route("/playerProfile/<lastname>/<firstname>/<number>")
@app.route("/playerProfile/<lastname>/<firstname>/<number>/<team>")
def playerProfile(lastname="",firstname="",number="00", team=""):
    dict = {'last'  : lastname,
            'first' : firstname,
            'number' : number,
            'team' : team}

    dict['title']="Hockey Player"
    
    return render_template("person.html", d =dict)

@app.route("/index")
def index():
    print request.args
    print request.args.get("size")
    return render_template("index.html",args=request.args)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
    
