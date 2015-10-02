import Flask from Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        return "done"

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

if __name__ = "__name__":
    app.debug = True
    app.run(host = "0.0.0.0", port=8000)
