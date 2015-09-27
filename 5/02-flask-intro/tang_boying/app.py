from flask import Flask, render_template

app = Flask(__name__)

@app.route("/about")
@app.route("/about/<pokemon>")
def about(pokemon="pikACHIU"):
    d = {'p':pokemon}
    return render_template("about.html", d=d)

@app.route("/madLib/<noun>")
@app.route("/madLib/<noun>/<verb>")
@app.route("/madLib/<noun>/<verb>/<adj>")
def madLib(noun="cat", verb="run", adj="red"):
    d = {'n':noun,
         'v':verb,
         'a':adj}
    return render_template("madLib.html", d=d)

@app.route("/css")
def css():
    return render_template("cssTest.html")

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
