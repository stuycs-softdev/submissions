from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/home/template.html")
def home(name=None):
    return render_template("template.html", name=name)



@app.route("/lucky")
def lucky():
    import random
    number = random.randrange(1,100)
    page="<h1>Your number is %<h1" %(number)
    return page
    


if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0' , port = 8000)
