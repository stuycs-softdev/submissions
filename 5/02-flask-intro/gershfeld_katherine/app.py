from flask import Flask, render_template
import random

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/decisions")
def decisions():
    return render_template("decisions.html")

@app.route("/decisions/")
@app.route("/decisions/<l>")
@app.route("/decisions/<l>/")
@app.route("/decisions/<l>/<f>")
def result(l="",f=""):
    if l != "" and f != "":
        ivy = ['Brown', 'Columbia', 'Cornell', 'Dartmouth', 'Harvard', 'Princeton', 'UPenn', 'Yale']
        d = {'last':l,
             'first':f}
        numColleges = 0
        for i in ivy:
            r = random.randint(0,1)
            if r > 0:
                d[i] = 'True'
                numColleges+=1
            else:
                d[i] = 'False'
        d['num'] = numColleges
        return render_template("result.html",d=d)
    else:
        return render_template("decisions.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
