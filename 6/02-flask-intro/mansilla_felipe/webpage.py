from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/mlb")
def mlb():
    mlb = {'favteam':"New York Yankees",
           'favplayer': "Derek Jeter"}
    return render_template("mlb.html", league = mlb)

@app.route("/nba")
def nba():
    nba = {'favteam':"New York Knicks",
           'favplayer': "Steve Nash"}
    return render_template("nba.html", league = nba)

@app.route("/epl")
def epl():
    epl = {'favteam':"Manchester City",
           'favplayer':"Sergio Aguero"}
    return render_template("epl.html", league = epl)


if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=8000)
