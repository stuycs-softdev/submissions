from flask import Flask, render_template, session, redict, url_for
import random
app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/rogues")
def rogues():
    return render_template("rogues.html")

@app.route("/horoscope")
def horoscope():
    return render_template("horoscope.html")

@app.route("/<num>d<size>")
def rollDie(num,size):
    try:
        sum = 0;
        for x in range(int(num)):
            sum += random.randrange(1,int(size)+1)
        return render_template("diceRoll.html",result=sum)
    except:
        return "The url should be formatted as (integer > 0)d(integer > 1)"
    

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8000)
