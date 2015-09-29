from flask import Flask, render_template
from random import randint

app = Flask(__name__)

# @app.route will run the function directly below it!

@app.route("/")
@app.route("/home")
def home():
    return "<hi>Home Page</h1>"

@app.route("/ayy")
def ayy():
    return "<p>ayy lmao different routes</p>"

@app.route("/random_num")
def vomit_a_number():
    r = randint(0,100)
    return "<p>Random number: %d</p>" , (r)

@app.route("/render_demo")
def render_demo():
    return render_template("an_html_file.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
    # host='0.0.0.0' means anyone can access this over the net
    # host='127.0.0.1' means only you can access this over the net
    # port=8000 because we no want to interfere with other web apps

