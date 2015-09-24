from flask import Flask, render_template, request
import os

app = Flask(__name__)

def makeFile(question, text0, text1, text2, text3, text4, text5, text6, text7, text8, text9):
    addQ = open("questionList","a")
    addQ.write(question + "\n")
    addQ.close()
    f = open(question,"w")
    os.chmod( question,0666)
    f.write(question + "\n")
    if (text0 != ""):
        f.write(text0 + "\n")
    if (text1 != ""):
        f.write(text1 + "\n")
    if (text2 != ""):
        f.write(text2 + "\n")
    if (text3 != ""):
        f.write(text3 + "\n")
    if (text4 != ""):
        f.write(text4 + "\n")
    if (text5 != ""):
        f.write(text5 + "\n")
    if (text6 != ""):
        f.write(text6 + "\n")
    if (text7 != ""):
        f.write(text7 + "\n")
    if (text8 != ""):
        f.write(text8 + "\n")
    if (text9 != ""):
        f.write(text9 + "\n")
    f.close()
    return

def htmlify(question):
    f = open(question,"r")
    text = f.readline()
    html = "\t<table>\n\t\t<tr>\n\t\t\t" + question + "\n\t\t</tr>\n\t\t<br>\n\t\t</tr>\n"
    for i in range(0,10):
        line = f.readline().strip("\n")
        if line == "":
            break
        html += "\t\t<tr>\n"
        html += "\t\t\t<td>" + line + "</td>\n\t\t</tr>\n"
    html += "\t</table>\n<hr>\n"
    f.close()
    return html

def allhtmlify():
    f = open("questionList",'r')
    questions = f.readlines()
    html = ""
    for question in questions:
        question = question.strip("\n")
        html += htmlify(question)
    f.close()
    return html
    
def rewrite():
    f = open("templates/viewList.html",'w')
    f.write('{% extends "page.html" %}\n')
    f.write('{% block content %}')
    f.write('<div>\n')
    f.write(allhtmlify())
    f.write('</div>\n')
    f.write('{% endblock %}')

@app.route("/home")
def home():
    return render_template("home.html")

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
        rewrite()
        return render_template("viewList.html")

@app.route("/viewlist")
def view():
    rewrite()
    return render_template("viewList.html")
   
if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
