from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/mlb")
def mlb():
    return render_template("mlb.html")

@app.route("/nba")
def nba():
    return render_template("nba.html")

@app.route("/epl")
def epl():
    return render_template("epl.html")


if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=8000)
