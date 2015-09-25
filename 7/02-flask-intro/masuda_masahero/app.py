from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/hi")
def hi():
    import random
    num = rand.randrange(0,2)
    if num == 0:
      return "<h1>Its your lucky day!</h1>"
    return "<h1>Oh no, its not your lucky day!</h1>"

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
