from flask import Flask, render_template
import random
app = Flask(__name__)

@app.route("/")
@app.route("/<view>")
@app.route("/<view>/<time>")
def home(view = "", time = ""):
    if view == "none":
        view = "YOU CAN'T SEE ME"
    if time == "now":
        time = "MY TIME IS NOW"
    stuff = {'view' : view , 'time' : time}
    return render_template("home.html", stuff = stuff)

@app.route("/about")
def about():
    num = random.randrange(0,100)
    return render_template("about.html", num = num)


if __name__ == "__main__":
    app.debug =True
    app.run(host = '0.0.0.0', port = 8000)
