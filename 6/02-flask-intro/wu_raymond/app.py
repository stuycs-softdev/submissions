from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/random")
def random():
    import random
    n0 = random.randrange(1,100)
    n1 = random.randrange(1,100)
    n2 = random.randrange(1,100)
    n3 = random.randrange(1,100)
    n4 = random.randrange(1,100)
    return "<h1>Lucky numbers: %d, %d, %d, %d, %d</h1>"%(n0,n1,n2,n3,n4)
    
if __name__=="__main__":
    app.debug = True
    app.run(host='127.0.0.1',port=8003)
