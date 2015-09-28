from flask import Flask, render_template
import random
app = Flask(__name__)

@app.route("/<view>/<time>")
def home(view = "YOU CAN'T SEE ME", time = "MY TIME IS NOW"):
    stuff = {'view' : view , 'time' : time}
    return render_template("home.html", stuff = stuff)

@app.route("/about")
def about():
    num = random.randrange(0,100)
    return render_template("about", num = num)


if __name__ == "__main__":
    app.debug =True
    app.run(host = '0.0.0.0', port = 8000)
