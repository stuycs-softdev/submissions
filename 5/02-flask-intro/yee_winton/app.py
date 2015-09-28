from flask import Flask, render_template

app = Flask(__name__)

#When someone goes to "/home", do the thing (must return string).
@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/track")
def track():
    import random
    r = random.randrange(1,4)
    if r == 1:
        return render_template("track1.html")
    if r == 2:
        return render_template("track2.html")
    if r == 3:
        return render_template("track3.html")

@app.route("/<lastname>/<firstname>")
def taylor(lastname="",firstname=""):
    if lastname=="swift" and firstname=="taylor":
        return render_template("tswizz.html")
    else:
        d = {"last" : lastname,
             "first": firstname}
        return render_template("nope.html",d=d)

#Debug is true to get better error messages
#Run the app. The host COULD be IP address, but normally put it down as 0.0.0.0 so that anyone can use the app.
if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)
