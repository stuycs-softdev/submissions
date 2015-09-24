from flask import Flask, render_template

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

if __name__ == "__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)
    
