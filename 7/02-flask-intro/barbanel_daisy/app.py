from flask import Flask, render_template
from random import randint

app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

@app.route("/rabbit")
def rabbit():
    color = ""
    if randint(0,1) == 0:
        color = "#3399FF"
    else:
        color = "red"
    page = render_template("rab.html")
    text = page.split()    
    for i in range(len(text)):
        if text[i] == "COLOR":
            text[i] = color
    page = " ".join(text)
    return page

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
