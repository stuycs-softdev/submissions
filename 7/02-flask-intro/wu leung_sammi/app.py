from flask import Flask, render_template, request
from helper import makeFile, allDict
import  random

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    num = random.randint(10000,1000000)
    return render_template("home.html", n = num)

@app.route("/list", methods = ["GET","POST"])
def table():
    if request.method == "GET":
        return render_template("form.html")
    if request.method == "POST":
        question = request.form["question"]
        text0 = request.form["0"]
        text1 = request.form["1"]
        text2 = request.form["2"]
        text3 = request.form["3"]
        text4 = request.form["4"]
        text5 = request.form["5"]
        text6 = request.form["6"]
        text7 = request.form["7"]
        text8 = request.form["8"]
        text9 = request.form["9"]
        makeFile(question, text0, text1, text2, text3, text4, text5, text6, text7, text8, text9)
        d = allDict()
        return render_template("viewList.html", d = d)

@app.route("/viewlist")
def view():
    d = allDict()
    return render_template("viewList.html", d = d )
   
if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
