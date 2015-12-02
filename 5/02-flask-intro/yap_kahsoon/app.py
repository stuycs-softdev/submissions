#Kah Soon Yap
#HW02

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/tables")
def tables():
    return render_template("tables.html")

@app.route("/css")
def css():
    return render_template("css.html")

@app.route("/game")
@app.route("/game/")
@app.route("/game/<guess>")
def game(guess=""):
    if guess!="potato":
        result="YOU GUESSED WRONG! TRY AGAIN!"
    else:
        result="YOU GUESSED RIGHT!"
    dic = {'guess': guess,
           'rez': result,
           '1': 1,
           '2': 2,
           'zxcvbnm': "asdfghjkl"
           }
    lst = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 'end']
    return render_template("game.html", d=dic, l=lst)
           

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
