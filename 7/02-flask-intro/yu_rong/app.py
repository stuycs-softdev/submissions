from flask import Flask, render_template
from random import randrange

app = Flask(__name__)

@app.route("/")
def defaultPage():
    page = """
    <h1> Hi! </h1>
This will talk about my feelings regarding certain aspects of school
<\n> <a href="/homework">Homework opinion</a>
<\n> <a href="/test">Test Opinions</a>
"""
    return page

@app.route("/homework")
def hwPage():
    quotes = []
    quotes.append("I hate <b>homework</b>.")
    quotes.append("I find homework a large waste of time.")
    quotes.append("I prefer staying in class overtime over having homework.")
    quotes.append("Instead of doing homework, I could be doing something fun.")

    #<a href="/test">Test Opinions</a>

    return render_template("response.html", subject = "Homework", quote = quotes[randrange(len(quotes))])

@app.route("/test")
def testPage():
    quotes = []
    quotes.append("We are <i>not numbers</i>!")
    quotes.append("Tests kill trees and children's brain cells!")
    quotes.append("Tests are <b>EVIL</b>!")
    quotes.append("Teachers should not waste their time.")
    #<a href="/"> Back</a>

    return render_template("response.html", subject = "Tests", quote = quotes[randrange(len(quotes))])



if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port = 8000)
