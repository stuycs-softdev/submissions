from flask import Flask, render_template, request
import utils
app = Flask(__name__)

# define the directory for the app
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/lucky")
def lucky_number():
    import random
    r = random.randrange(1,100)
    return render_template("lucky.html",random=r)

@app.route("/artist/",methods=["GET","POST"])
#@app.route("/artist/<name>",methods=["GET","POST"])
def artist(name=""):
    d = utils.returnd()
    d2 = utils.returnartists()
    if request.method=="GET":
        return render_template("artist.html",dic=d2,stagename="artists")
    else:
        person = request.form["button"]
        if utils.validate(person):
            return render_template("artist.html",dic=d,stagename=person)
        else:
            return render_template("artist.html",dic=d2,stagename="artists")

@app.route("/home")
@app.route("/")
# define a function to be run everytime someone goes to your app
#      returns a string that represents the homepage
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
    # accessible on 'localhost:8000'
