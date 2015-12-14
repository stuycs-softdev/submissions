from flask import Flask, render_template
import random

app = Flask(__name__)


@app.route("/hangman")
def hangman():
    return render_template("hangman.html");


@app.route("/getlist")
def getlist():
    f = open("./static/wordlist.csv", "r")
    line = f.readline()

    l = []
    while (line):
        l.append(line)
        line = f.readline()

    r = random.choice(l)
    print r
    return r

if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
