from flask import Flask

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/aboutpuppies")
def puppies():
    return render_template("aboutpuppies.html")

<<<<<<< HEAD
@app.route("aboutanna")
=======
@app.rout("/aboutanna")
>>>>>>> 8c37cd0f35745d42444446f467f7b908e137cbb8
def anna():
    return render_template("aboutanna.html")


if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
