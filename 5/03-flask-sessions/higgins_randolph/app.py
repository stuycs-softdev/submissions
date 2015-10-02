from flask import Flask, render_template, request, session
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
            return render_template("JohnCena2.html", image = "static/johncena.jpg", n=1)
        else:
            return render_template("JohnCena1.html")

@app.route("/morePicturesOfJohnCena")
def JCmany():
   if 'n' not in session:
      session['n']=0
   n=session['n']
   n=n+1
   session['n']=n
   r = random.randint(1,6)
   im = "static/JC"+str(r)+".jpg"
   return render_template("JohnCena2.html", image = im, n=(n+1))

if __name__ == "__main__":
    app.debug = True
    app.secret_key="something I just made up"
    app.run(host='0.0.0.0', port=8000)
