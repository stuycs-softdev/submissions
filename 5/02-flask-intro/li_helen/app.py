#run in terminal with "python demo.py"
#localhost:8000/home

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/marquee")
def floating():
    return render_template("test.html")

@app.route("/numbers")
def numbers():
    return render_template("numbers.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/home")
def home():
    return "<h1>Home Page</h1>"

@app.route("/oldabout")
def oldabout():
    page="""
<h1>Hello</h1>
<h2>About me<h2>
<h3>old</h3>
"""
    return page


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
    
