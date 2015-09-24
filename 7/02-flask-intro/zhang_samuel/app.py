from flask import Flask, render_template
from random import randrange

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    page = "<h1> Home Sweet Home </h1>"
    page += '''<button><a href="/about"> About </a> </button>'''
    return page

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/biden")
def biden():
    quotes = []
    quotes.append("Faith sees best in the dark")
    quotes.append("My religion is just an enormous amount of solace.")
    quotes.append("The faith doesn't always stick with you, sometimes it leaves you.")
    quotes.append("My mom had an expression, 'As long as you're alive, you have an obligation to survive. You're not dead until you see the face of God.'")
    quotes.append("No one owes you anything. You just have to get up.")
    quotes.append("If I didn't get up, I would be letting [my son] down.")
    quotes.append("I marvel at the ability of people to absorb hurt and just get back up. And most of them do it with an incredible sense of empathy to other people.")

    homeBut = '''<button><a href="/home"> Go home? </a></button>'''
    return render_template("biden.html") + '''<text> " ''' + quotes[randrange(0, len(quotes))] + ''' "</text> ''' + homeBut


if (__name__ == "__main__"):
    app.debug == True
    app.run(host='0.0.0.0', port=8000)

