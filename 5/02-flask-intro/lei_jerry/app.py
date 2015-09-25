from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def show1():
    return "<h1>AHH</h1>"
@app.route("/home")
def show():
    return render_template("home.html")


if __name__=="__main__":
    app.debug = True
    app.run(host='127.0.0.1', port = 8000)
