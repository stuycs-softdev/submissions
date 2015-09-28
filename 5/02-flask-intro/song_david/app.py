from flask import Flask, render_template

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/hello")
def hello():
    return render_template("hello.html")

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")



@app.route("/name")
@app.route("/name/<lastname>/<firstname>")
def name(lastname = "", firstname = ""):
    d = {'lastname':lastname,
         'firstname': firstname}
    return render_template("name.html", dic = d)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 445)
