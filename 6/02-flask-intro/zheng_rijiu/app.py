from flask import Flask, render_template
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

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8000)
