from flask import Flask,render_template

app = Flask(__name__)
@app.route("/")

@app.route("/homepage")
@app.route("/<firstname>/<lastname>")
def home(firstname = "",lastname = ""):
    dictionary = {'firstname':firstname, 'lastname':lastname}
    return render_template("homepage.html", dictionary = dictionary)

@app.route("/testpage")
def testpage():
    import random
    rand = random.randrange(0,100)
    return render_template("testpage.html", rand = rand)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 2000)
