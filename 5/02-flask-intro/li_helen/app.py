#run in terminal with "python demo.py"
#localhost:8000/home

from flask import Flask, render_template

app = Flask(__name__)

@app.route("/calculator")
@app.route("/calculator/<number1>")
@app.route("/calculator/<number1>/<number2>")
def calculator(number1="1",number2="1"):
    num1 = number1;
    num2 = number2;
    add = float(num1) + float(num2)
    subtract = float(num1) - float(num2)
    multiply = float(num1) * float(num2)
    divide = float(num1)  / float(num2)
    d = {"addition":add,
         "subtraction":subtract,
         "multiplication":multiply,
         "division":divide
         }
    return render_template("calculator.html",d=d)


@app.route("/funnystory")
def funnystory():
    names = ["Mr.T", "Bobby", "Bob"]
    verbs = ["shop", "eat", "sleep"]
    verbs2 = ["yelling", "choking", "crying"]
    import random
    r1 = random.randrange(len(names))
    r2 = random.randrange(len(verbs))
    r3 = random.randrange(len(verbs2))
    return render_template("funnystory.html",names=names,verbs=verbs,verbs2=verbs2,r1=r1,r2=r2,r3=r3)

@app.route("/person")
@app.route("/person/<lastname>")
@app.route("/person/<lastname>/<firstname>")
def person(lastname="last",firstname="first"):
    d = {'last':lastname,
         'first':firstname,
         'title':"Fool Pitier"}
#'error':error}
    l = [1, 2, 3, 4, 'hello', 'world']
    return render_template("person.html",d=d,lst=l)

@app.route("/luckynumber")
def luckynum():
    import random
    r = random.randrange(1,100)
    return render_template("luckynumber.html",number=r)

@app.route("/marquee")
def floating():
    return render_template("test.html")

@app.route("/numbers")
def numbers():
    return render_template("numbers.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/home")
def home():
    return "<h1>Home Page</h1>"

@app.route("/oldabout")
def oldabout():
    page="""
<h1>Hello</h1>
<h2>About me<h2>
<h3>old</h3>
"""
    return page


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
    
