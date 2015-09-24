from flask import Flask, render_template

app = Flask(__name__)

@app.route("/lucky")
def lucky():
    import random
    number = random.randrange(1,100)
    page = """
    <link type="text/css" rel="stylesheet" href="/static/main.css"/>
    <h1>It's your Lucky Day!!!</h1>
    <hr>
    <h2>Lucky number: %d<h2>
    """%(number)
    return page


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/")
@app.route("/home")
def home():
    page = """
    <link type="text/css" rel="stylesheet" href="/static/main.css"/>
    <h1>Welcome To My Site!</h1>
    <hr>
    <h2>Links to other places:</h2>
    <ul>
      <li><a href = "lucky"> Lucky </a></li>
      <li><a href="about"> About </a></li>
    </ul>
    """
    return page

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
