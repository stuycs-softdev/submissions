from random import randrange
from flask import Flask, render_template, request
import utils

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    page =  '<h1 align="center"> School Store </h1>'
    page += '<p>Shop for Writing Implements</p> <button> <a href="/implements"> Go </a> </button> <br>'
    page += '<p>Shop for Books</p> <button> <a href="/books"> Go </a> </button> <br>'
    page += '<p>Suggestion products</p> <button> <a href="/form"> Go </a> </button> <br>'
    return page

@app.route("/implements")
def implements():
    producter = "Implements"
    lister = ["Pen", "Pencil", "Crayon"]
    return render_template("items.html", product = producter, l = lister )

@app.route("/books")
def books():
    producter = "Books"
    lister = ["Notebook", "Binder", "Textbook"]
    return render_template("items.html", product = producter, l = lister )

@app.route("/product/<producter>")
def product(producter=""):
    if producter == "":
        return '<h1> You probably should not be here </h1> <br> <button> <a href="/"> Return Home </a> </button>'
    else:
        dict = {'product':producter, 'price':randrange(100) + 1, 'inventory':0}
        return render_template("product.html", d = dict)

@app.route("/form", methods=["GET","POST"])
def form():
    if request.method == "GET":
        return render_template("form.html")
    else:
        supply = request.form['supply']
        reason = request.form['reason']
        button = request.form['button']
        if button=="cancel":
            return render_template("form.html")
        if utils.checkproduct(supply):
            return "<h1>Your request is being processed</h1> <h5> Not really... </h5>"
        else:
            stat = "Already available"
            return render_template("form.html",status=stat)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
