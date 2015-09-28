from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("homepage.html")

@app.route("/page1")
def page1():
    import random
    r = random.randrange(0,100)
    return render_template("page1.html",number = r)

@app.route("/page2")
@app.route("/page2/<firstname>")
@app.route("/page2/<firstname>/<lastname>")
def page2(lastname = "", firstname=""):
    d = {'first':firstname,'last':lastname}
    return render_template("page2.html",d = d)


if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
