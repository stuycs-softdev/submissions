from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    page =  '<h1 align="center"> Home Page </h1>'
    page += '<button> <a href="/page1">Page 1</a> </button>'
    page += '<button> <a href="/page2">Page 2</a> </button>'
    return page

@app.route("/page1")
def page1():
    page = render_template("page.html")
    return page % (1)

@app.route("/page2")
def page2():
    page = render_template("page.html")
    return page % (2)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
