from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

@app.route("/home")
def home():
    return render_template("home.html")
    
@app.route("/p1")
def p1():
    return render_template("p1.html")

@app.route("/p2")
def p2():
    return render_template("p2.html")

@app.route("/hidden")
def hidden():
    import random
    n1 = random.randrange(1,100)
    n2 = random.randrange(1,100)
    ret = "<h1>Awesome! You are the %dth visitor!</h1>" % n1
    ret += "Just kidding...you are really the %dth visitor" % n2
    return ret

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    
@app.route("/login2",methods=["GET","POST"])
def login2():
    if request.method == "GET":
        return render_template("login2.html")
    else:
        name = request.form['name']
        email = request.form['email']
        button = request.form["button"]
        
        print request.__doc__
        print request.args
        print request.__dict__
        print request.__dir__
        print request.args.get("email") #works with GET
        print request.form["email"] #works with POST

        s = "name: " + request.form["name"]
        s += "<hr>"
        s += "email: " + request.form["email"]
        return s;

@app.route("/profile/<name>/<email>")
def profile(name="", email=""):
    # dict = {"name": name, "email": email}
    dict = {}
    dict["name"]=name
    dict["email"]=email
    return render_template("profile.html", d = dict)
    
@app.route("/inc")
def inc():
    if "n" not in session:
        session["n"]=0
    session["n"] = session["n"]+1
    return render_template("counter.html", n = session["n"])


@app.route("/")
@app.route("/start")
def start():
    return render_template("start.html")
        

@app.route("/login3", methods=["GET","POST"])
def login3():
    if request.method == "GET":
        return render_template("login3.html")
    else:
        uname = request.form["username"]
        pword = request.form["password"]
        if uname == "Leon" and pword == "pass":
            # return "You have logged in!"
            # return redirect(url_for("user"))
            return redirect("/userpage")
        else:
            return "You have entered an incorrect username or password <br> <br> <a href> Click Here to go back to start page </a>"

@app.route("/userpage")
def userpage():
    #TODO: add a way to log out
    return render_template("userpage.html")
        
if __name__ == "__main__":
    app.debug=True
    app.secret_key = "Don't store this on github" #used for cookies, session
    app.run(host='0.0.0.0',port=8000)

    
