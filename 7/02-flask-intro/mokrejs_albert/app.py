from flask import Flask, render_template

app = Flask(__name__)

@app.route("/DT")
def DT():
    return '<button><a href= "http:dailytechnomancer.com/"> VISIT MY WEBSITE </a></button>'

@app.route("/")
@app.route("/home")
def home():
    return render_template("about.html")

@app.route("/xkcd")
def lucky():
    import random
    comic = random.randrange(1,1580)
    return '<button><a href= "http://xkcd.com/%/"> XKCD </a></button>'%(comic)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
