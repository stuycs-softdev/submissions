from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/profile")
@app.route("/profile/")
@app.route("/profile/<lastname>")
@app.route("/profile/<lastname>/<firstname>")
@app.route("/profile/<lastname>/<firstname>/<annaorpuppy>")
def profile(lastname="", firstname="", annaorpuppy=""):
    dict = {'last':lastname, 'first':firstname, 'AorP':annaorpuppy}
    return render_template("profile.html", d = dict)


@app.route("/aboutpuppies")
def puppies():
    return render_template("aboutpuppies.html")


@app.route("/aboutanna")
def anna():
    return render_template("aboutanna.html")


if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
