from flask import Flask, render_template

app = Flask(__name__)

@app.route("/DT")
def DT():
    return '<button><a href= "http:dailytechnomancer.com/"> VISIT MY WEBSITE </a></button>'

@app.route("/")
@app.route("/<a>/<b>/<c>")
@app.route("/home")
@app.route("/home/<a>/<b>/<c>")
def home(a = "x", b = 1, c = 3):
    if a == "x":
        a = " times "
        d = b*c
    if a == "d":
        a = " divided by "
        d = b/c
    if a == "p":
        a = " plus "
        d = b+c
    if a == "m":
        a = " minus "
        d = b-c
    if a == "n":
        a = " to the power of "
        d = b**c
    return render_template("about.html", a=a,b=b,c=c,d=d)

@app.route("/xkcd")
def lucky():
    import random
    comic = random.randrange(1,1580)
    return '<button><a href= "http://xkcd.com/%/"> XKCD </a></button>'%(comic)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
