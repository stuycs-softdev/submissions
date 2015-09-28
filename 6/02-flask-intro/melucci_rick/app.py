from flask import Flask, render_template

app = Flask(__name__)

myList = []

@app.route("/")
@app.route("/home")
@app.route("/home.html")
def home(name=None):
    return render_template("home.html", name=name)


@app.route("/tablestuff")
def tablestuff():
    import random
    number = random.randrange(1,100)
    myList.insert(0, number)
    return render_template("tablestuff.html", n=number, d = myList)
    
@app.route("/lucky")
def lucky():
    import random
    number = random.randrange(1,100)
    page="<h1>Your number is %d </h1>" %(number)
    return page


if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0' , port = 8000)