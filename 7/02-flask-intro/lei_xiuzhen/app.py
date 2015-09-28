from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/page2")
def page2():
    return render_template("page2.html")

@app.route("/magic8ball")
@app.route("/magic8ball/<name>/<question>")
def magic8ball(name = "",question = ""):
    dict = {'name' : name,
            'question' : question}
    list = ["yes","no","maybe","definitely","definitely not","I don't know"]

    import random
    ch = random.randrange(0,6)
    choice = list[ch]

    return render_template("magic8ball.html",d=dict,c=choice)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
