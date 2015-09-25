from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/funny")
def funny():
    return render_template("funny.html")

@app.route("/cronut")
def cronut():
    return render_template("cronut.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)


