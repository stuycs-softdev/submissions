from flask import Flask, render_template, request
import os, random

app = Flask(__name__)

def makeFile(question, text0, text1, text2, text3, text4, text5, text6, text7, text8, text9):
    addQ = open("questionList","a")
    addQ.write(question + "\n")
    addQ.close()
    f = open(question,"w")
    os.chmod( question,0666)
    f.write(question + "\n")
    f.write(text0 + "\n")
    f.write(text1 + "\n")
    f.write(text2 + "\n")
    f.write(text3 + "\n")
    f.write(text4 + "\n")
    f.write(text5 + "\n")
    f.write(text6 + "\n")
    f.write(text7 + "\n")
    f.write(text8 + "\n")
    f.write(text9 + "\n") 
    return

def listify(question):
    f = open(question,"r")
    text = f.readlines()
    for i in range(len(text)):
        text[i] = text[i].strip("\n")   
    f.close()
    return text

def allDict():
    f = open("questionList",'r')
    questions = f.readlines()
    dictionary = {}
    for question in questions:
        question = question.strip("\n")
        dictionary[question] = listify(question)
    f.close()
    return dictionary

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
        listify(question)
        d = allDict()
        return render_template("viewList.html", d = d)

@app.route("/viewlist")
def view():
    d = allDict()
    return render_template("viewList.html", d = d )
   
if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
