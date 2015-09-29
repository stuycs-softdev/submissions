from flask import Flask, render_template, request
from random import randrange
from authenticate import authenticate #Lol, woops. same name, bad choice

app = Flask(__name__)

homeBut = '''<p> <button><a href="/home"> Go home? </a></button> </p>'''
aboutBut = '''<p> <button><a href="/about"> About </a> </button> </p>'''
wisdomBut = '''<p> <button><a href="/biden"> Biden's Wisdom </a> </button> </p>'''
newQuoteBut = '''<p> <button><a href="/biden"> New Quote </a></button> </p>'''
nicknameBut = '''<p> <button><a href="/nicknames"> Biden's Nicknames </a> </button> </p>'''
fanclubBut = '''<p> <button><a href="/login"> Biden Super Secret Fanclub </a> </button> </p>'''

#buttons = {'homeButton' : homeBut,
 #          'aboutButton' : aboutBut,
  #         'wisdomButton' : wisdomBut,
   #        'newQuoteButton' : newQuoteBut,
    #       'nicknameButton' : nicknameBut
     #      }

@app.route("/")
@app.route("/home")
def home():
    page = "<h1> Home Sweet Home </h1>"
    page += aboutBut
    page += wisdomBut
    page += nicknameBut
    page += fanclubBut
    return page

@app.route("/about")
def about():
    return render_template("about.html") + homeBut + wisdomBut

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

    q = quotes[randrange(len(quotes))]
    
    return render_template("biden.html", quote = q) + homeBut + newQuoteBut

@app.route("/nick")
@app.route("/nicknames")
def nicknames():
    nicknames = ["The Bidenator", "Biddy", "The Un-Cheney", "Biden O'Malley", "Cup of Joe", "Joe Mac", "Bice President", "Captain America", "Chess Master", "Junior Mints"]
    origin = ["Press secretory Robert Gibbs", "AmTrak executives", "Obama", "St. Patrick's Day", "Farm subsidies", "Big Mac", "Secret Service", "Personal staff", "Uninformed checkers player", "Favorite snack"]

    return render_template("nicknames.html", n = nicknames, o = origin) + homeBut

#to test GET
@app.route("/fanclub")
def fanclub(): #insecure login test, returns password on url
    print request.args
    print request.args.get("size")
    return render_template("fanclub.html", args = request.args) #args = request.args adds form inputs to end of url

#Using login instead of fanclub: login uses POST ==> more secure, doesn't reveal password in url 

#mainly to test POST
@app.route("/login", methods = ["POST", "GET"])
def login():
    if (request.method == "GET"): #default
        return render_template("login.html") + homeBut
    else:
        username = request.form["username"]
        password = request.form["password"]
        button = request.form["button"]
        if button == "cancel":
            return render_template("login.html") + homeBut
        if authenticate(username, password):
            return "<h1> Logged In! </h1>" + homeBut
        else:
            error = "Wrong username or password, BIDEN UP!"
            return render_template("login.html", err=error) + homeBut

if (__name__ == "__main__"):
    app.debug == True
    app.run(host='0.0.0.0', port=8000)

