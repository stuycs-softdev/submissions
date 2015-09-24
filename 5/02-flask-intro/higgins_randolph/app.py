from flask import Flask
import random
app = Flask(__name__)

@app.route("/secondary")
def secondary():
    page = "<body style=background-color:lightblue>"
    page+="<p>this is my other page<p>"
    page+="<a href=home>go back home</a>"
    return page

@app.route("/home")
def home():
    page = ""
    page+="<h1>first Heading<h1>"
    page+="<h2> goddamn </h2>"
    page+="<a href=secondary>go to the other page</a>"
    return page

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
