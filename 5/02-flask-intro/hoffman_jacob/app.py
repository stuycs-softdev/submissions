from flask import Flask, render_template

app = Flask(__name__)

@app.route("/ptok")
def ptok():
    return render_template("ptok.html")
@app.route("/goodbye")
def goodbye():
    return render_template("goodbye.html")
@app.route("/listdic")
def listdic():
    page="<h1>this a cool list heehee</h1>"
    list = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10]
    dic = {"a" : 10, "b" : 11, "c" : 12, "d" : 13, "e":14, "f":15}
    mathanswer = list[5] + dic["a"]
    page = page + '<br><a href="/home">go home dude</a>'
    page = page + '<br>5 + a in base 10 is 15. <br> list[5] + dic["a"] =' + str(mathanswer)
    if ( mathanswer == 15 ):
        page = page + '<br>CORRECT list[5] + dic["a] does equal 15 :) :)</br>'
    else:
        page = page + '<br>INCORRECT list[5] + dic["a] does NOT  equal 15 :('
    page = page + '<br><a href="/goodbye">bye</a>'
    return page
@app.route("/")
@app.route("/home")
def home():
    page="<h1>Pounds to kilo chart In the Below Link</h1>"
    page = page + '<br><a href="/ptok">Pounds to Kilos</a>'
    page = page + '<br><a href="/goodbye">bye</a>'
    page = page + '<br><a href="/listdic">List</a>'
    page = page + "<br><h2>Click above</h2>"
    return page


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
