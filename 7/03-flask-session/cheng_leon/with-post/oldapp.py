from flask import Flask, render_template

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/oldabout")
def oldabout():
    page="""
    <h1>About</h1>
<hr>
<ol>
<li>Fred Flintstone</li>
<li>Mr. T</li>
<li>The Hulk</li>
</ol>
"""
    return page

@app.route("/profile")
@app.route("/profile/")
@app.route("/profile/<lastname>")
@app.route("/profile/<lastname>/<firstname>")
def profile(lastname="",firstname=""):
    dict = {'last'  : lastname,
            'first' : firstname}

    dict['title']="Grand Poobah"

    list = [10,20,"thirty",40,"Fifty"]
    
    return render_template("person.html", d =dict ,l = list)

@app.route("/")
@app.route("/home")
def home():
    page="<h1>Hello World</h1>"
    page = page + '<button><a href="/about">About</a></button>'
    page = page + "<h2>Welcome</h2>"
    return page

@app.route("/lucky")
def lucky():
    import random
    n = random.randrange(1,100)
    return render_template("lucky.html", number = n)


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
