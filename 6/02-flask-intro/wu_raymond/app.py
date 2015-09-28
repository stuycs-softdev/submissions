from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/advice")
def advice():
    import random
    quotes = [];
    quotes.append("We all wear masks, and the time comes when we cannot remove them without removing some of our own skin.")
    quotes.append("We understand how dangerous a mask can be. We all become what we pretend to be.")
    quotes.append("Nothing is more real than the masks we make to show each other who we are.")
    quotes.append("An honest enemy is better than a friend who lies.")
    quotes.append("Who knows what's behind that smile?")
    quotes.append("Why so serious?")
    s = quotes[random.randrange(0,len(quotes))]

    return render_template("advice.html", quote = s)

@app.route("/ask")
@app.route("/ask/")
@app.route("/ask/<word>")
def ask(word=""):
    d = {};
    d['knife'] = "A useful toy. It can bring suffering... or relief. Have you ever tried juggling several of them at once?"
    d['friend'] = "I have no friends, only acquantances. As soon as you feel like you can call someone a friend, that's when they can stab you in the back."
    d['box'] = "A present? How sweet. I love surprises. But it seems like few others I've met do... I wonder why..."
    return render_template("ask.html", d = d, word=word)
if __name__=="__main__":
    app.debug = True
    app.run(host='127.0.0.1',port=8001)
