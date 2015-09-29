from flask import Flask, render_template
from random import randrange

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/fun")
def fun():
    return render_template("fun.html")

@app.route("/bunnies")
def bunnies():
    place = randrange(4)
    d = {}
    d['Miniature Lion Lop'] = "Lopped ears and mane of Lionhead. Has a bib!"
    d['Jersey Wooly'] = "About 3 pounds, docile, with easy-care wool fur!"
    d['American Sable'] = "Result of Chinchilla rabbit crosses. One named Luna is prizewinning!"
    d['Continental Giant'] = "Also known as the German Giant, and originally bred for meat, the largest of these bunnies is about 4 feet 4 inches and 53 pounds!"
    d['Miniature Lop'] = "With a maximum weight of 1.6 kilograms, they are small and easily handeled!"
    keez = d.keys()
    return render_template("bunnies.html", d = d, place = place, keez = keez)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0',port=8000)
        
