from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/funny")
def funny():
    return render_template("funny.html")


app.debug = True
app.run(host = '0.0.0.0', port = 8000)


