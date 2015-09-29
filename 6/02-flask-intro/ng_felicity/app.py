from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about/<name>")
def about(name=""):
    d={"name":name}
    return render_template("about.html",d=d)

@app.route("/random/<ally>")
def random(ally=""):
    import random
    number = random.randrange(1,100)
    ally = ally
    page = """
    <h1>The chance of your ally being able to help you get home is %d percent.</h1>
    <button><a href="/">Home</a></button>
    """%(number)
    return page

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
