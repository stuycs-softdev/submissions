from flask import Flask, render_template

app = Flask(__name__)

@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/number")
@app.route("/number/")
@app.route("/number/<lower>")
@app.route("/number/<lower>/")
@app.route("/number/<lower>/<upper>")
@app.route("/number/<lower>/<upper>/")
def number(lower = "", upper = ""):
    import random
    d = {}
    if lower == "" or upper == "":
        d["message"] = "Enter two numbers at end of URL"
    else:
        d["message"] = "Number:"
        d["num"] = random.randrange(int(lower), int(upper))
    return render_template("number.html", d = d)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
