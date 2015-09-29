from flask import Flask, render_template
from random import randint


app = Flask(__name__)


@app.route("/")
@app.route("/home")
@app.route("/home/<fullname>")
def home(fullname=None):
    d = {}
    candidates = ['Joe Biden', 'Lincoln Chafee', 'Hilary Clinton','Bernie Sanders',
             'Jeb Bush', 'Ben Carson', 'Chris Christie','Ted Cruz','Carly Fiorina',
             'Donald Trump']
    if fullname == None:
        fullname = candidates[randint(0,len(candidates))-1]
    boss = candidates[randint(0,len(candidates))-1] 
    d = {'full':fullname,
        'last':fullname.split()[1],        
        'boss':boss}
    return render_template('home.html', names = d, candidates = candidates)


@app.route("/rabbit/")
def ranColor():
    color = ""
    if randint(0,1) == 0:
        color = "#3399FF"
    else:
        color = "red"
    return render_template('rab.html', c = color)

@app.route("/rabbit/<color>")
def rabbit(color):
    if color == "blue":
        color = "#3399FF"
    return render_template('rab.html', c = color)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)

