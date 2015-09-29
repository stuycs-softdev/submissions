from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route("/")
def index():

    return render_template("index.html", potato = random.randint(0, 100))

if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0", port = 8000)
