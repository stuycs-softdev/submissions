from flask import Flask, render_template

app = Flask(__name__)


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/oldabout")
def oldaboutpage():
    page="""
<h1>About</h1>
<br>
<ol>
<li>About 1</li>
<li>About 2</li>
<li>About 3</li>
</ol>
"""
    return page

@app.route("/lucky")
def lucky_number():
    import random
    r = random.randrange(1,100)
    return "<h1>Lucky Number: %d</h1>" % (r)
    
@app.route("/home")
@app.route("/")
def kerfuffle():
    return "<h1>Home Page</h1><h2>Hello World</h2>"

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
