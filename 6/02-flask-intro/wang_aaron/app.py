from flask import Flask, render_template, request, redirect, url_for, session


app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("homepage.html")

@app.route("/page1")
def page1():
    import random
    r = random.randrange(0,100)
    return render_template("page1.html",number = r)

@app.route("/page2")
@app.route("/page2/<firstname>")
@app.route("/page2/<firstname>/<lastname>")
def page2(lastname = "", firstname=""):
    d = {'first':firstname,'last':lastname}
    return render_template("page2.html",d = d)

@app.route("/form", methods=["GET","POST"])
def page3():
    print dir(request)
    return render_template("page3.html", args = request.args)

@app.route("/inc")
def page4():
    if 'n' not in session:
        session['n'] = 0
    n = session['n']
    n = n + 1
    session['n'] = n
    return render_template("page4.html", n = n)

@app.route("/dec")
def page4():
    if 'n' not in session:
        session['n'] = 0
    n = session['n']
    n = n - 1
    session['n'] = n
    return render_template("page4.html", n = n)

@app.route("/reset")
def page4():
    session['n'] = 0
    return render_template("page4.html", n = n)



if __name__=="__main__":
    app.secret_key="Don't store this on github"
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
