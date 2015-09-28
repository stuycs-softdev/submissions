from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/random")
def random():
    import random
    number = random.randrange(1,100)
    page = """
    <h1>Your chance of getting home is %d percent.</h1>
    <button><a href="/">Home</a></button>
    """ %(number)
    return page

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
