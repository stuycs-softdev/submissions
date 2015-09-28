from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/person")
@app.route("/person/<first><last><number>")
def person(first="Bob",last="TheBuilder",number=9000):
    return render_template("person.html", last=last,first=first, favNum=number)

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
