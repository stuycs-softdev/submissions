from flask import Flask, render_template, session, request, redirect, url_for
import random

app= Flask(__name__)

f = open('Emergency_Response_Incidents.csv','r')
s = f.read()
f.close()

def happenings():
    l = s.split("\n")
    Incidents = []
    for i in l:
        q = i.split(",")
        Incidents.append(q[0])
    return Incidents

def place():
    l = s.split("\n")
    Places = []
    for i in l:
        q = i.split(",")
        Places.append(q[len(q) - 1])
    return Places

@app.route("/",methods=["GET","POST"])
@app.route("/home",methods=["GET","POST"])
def home():
    return render_template("home.html")


@app.route("/marquee")
def ranIn():
    l = happenings()
    i = random.randint(0,len(l) - 1)
    t = str(l[i])
    l = place()
    t = t + ": " + str(l[i])
    return t

@app.route("/contentload")
def contlod():
    return s

if __name__ == '__main__':
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
