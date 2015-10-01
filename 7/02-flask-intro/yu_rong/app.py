from flask import Flask, render_template, request
from random import randrange

app = Flask(__name__)

@app.route("/login", methods=["GET","POST"])
def logIn():
    if request.method == "GET":
        return render_template("login.html")
    else:
        userName = request.form['username']
	if userName=='rongisawesome':
            return render_template("loginres.html")
	else:
            return render_template("problem.html")

@app.route("/home")
def defaultPage():
    return render_template("home.html")

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
