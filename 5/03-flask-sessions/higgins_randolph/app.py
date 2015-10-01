from flask import Flask, render_template, request
#import utils
import random

app = Flask(__name__)

@app.route("/")
def home():
   return render_template("home.html")

@app.route("/WhoIsChamp", methods=["GET","POST"])
def JC():
    if request.method=="GET":
        return render_template("JohnCena1.html")
    else:
        button = request.form['button']
        isCena = request.form['password']
        if button == "cancel":
            return render_template("JohnCena1.html")
        if isCena == "John Cena":
            return render_template("JohnCena2.html", image = "static/johncena.jpg")
        else:
            return render_template("JohnCena1.html")

@app.route("/morePicturesOfJohnCena")
def JCmany():
    r = random.randint(1,6)
    im = "static/JC"+str(r)+".jpg"
    return render_template("JohnCena2.html", image = im)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
