from flask import Flask, render_template

app = Flask(__name__)

@app.route("/ptok")
def ptok():
    return render_template("ptok.html")
@app.route("/goodbye")
def goodbye():
    return render_template("goodbye.html")
@app.route("/hi")
def hi():
    return render_template("hi.html")
@app.route("/")
@app.route("/home")
def home():
    page="<h1>Pounds to kilo chart In the Below Link</h1>"
    page = page + '<br><a href="/ptok">Pounds to Kilos</a>'
    page = page + '<br><a href="/goodbye">bye</a>'
    page = page + '<br><a href="/hi">hello</a>'
    page = page + "<br><h2>Click above</h2>"
    return page


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
