from flask import Flask, render_template
from random import randrange

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    page = "<h1> Home Sweet Home </h1>"
    page += '''<p> <button><a href="/about"> About </a> </button> </p>'''
    page += '''<p> <button><a href="/biden"> Biden's Wisdom </a> </button> </p>'''
    return page

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/biden")
def biden():
    quotes = []
    quotes.append("Faith sees best in the dark")
    quotes.append("My religion is... an enormous amount of solace.")
    quotes.append("The faith doesn't always stick with you, sometimes it leaves you.")
    quotes.append("My mom had an expression, 'As long as you're alive, you have an obligation to survive. You're not dead until you see the face of God.'")
    quotes.append("No one owes you anything. You just have to get up.")
    quotes.append("If I didn't get up, I would be letting [my son] down.")
    quotes.append("I marvel at the ability of people to absorb hurt and just get back up. And most of them do it with an incredible sense of empathy to other people.")

    homeBut = '''<p> <button><a href="/home"> Go home? </a></button> </p>'''
    newQuote = '''<p> <button><a href="/biden"> New Quote </a></button> </p>'''
    
    return render_template("biden.html") + '''<p> "''' + quotes[randrange(0, len(quotes))] + '''"</p> ''' + homeBut + newQuote


if (__name__ == "__main__"):
    app.debug == True
    app.run(host='0.0.0.0', port=8000)

