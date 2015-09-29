from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
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
    


if __name__ == "__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)
    
