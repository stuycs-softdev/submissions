from flask import Flask,render_template
import random
app = Flask(__name__)

@app.route("/")
def hello():
    number = random.randrange(0,100,5)
    return render_template("hello.html",number=number)

@app.route("/fire")
def fire():
    string = "fire.jpg"
    return render_template("fire.html")
    FILE.close()

@app.route("/what")
@app.route("/what/<b>")
@app.route("/what//<r>")
@app.route("/what/<b>/<r>")
def what(b="heart",r="wrong"):
    return render_template("what.html",b=b,r=r)

if __name__ == "__main__":
    app.debug = True
    app.run()
