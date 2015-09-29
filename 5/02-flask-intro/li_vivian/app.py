from flask import Flask, render_template

app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/login")
@app.route("/login/")
def login():
    return render_template("login.html")

@app.route("/about")
def about():
    return render_template("about.html") 

@app.route("/secret")
def secret():
    return render_template("secret.html")

@app.route("/pie")
@app.route("/pie/")
@app.route("/pie/<flavor>")
def pie(flavor = "blueberry"):        
    import random 
    r = random.randrange(1, 100)
    if r > 50:
        msg = "THAT'S A LOT OF PIES"
    if r < 50:
        msg = "WOW"        
    d = {'flavor': flavor,
         'message': msg}

    return render_template("pie.html", d = d, number = r)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
