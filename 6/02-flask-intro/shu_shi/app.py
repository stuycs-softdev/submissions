from flask import Flask,render_template

app = flask(__name__)
@app.route("/")

@app.route("/homepage")
def home():
    return render_template("homepage.html")

@app.route("/testpage")
def testpage():
    return render_template("testpage.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
