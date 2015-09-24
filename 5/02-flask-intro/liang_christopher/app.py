from flask import Flask, render_template

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/portraits")
def portraits():
    return render_template("portraits.html")

@app.route("/creative")
def creative():
    return render_template("creative.html")

@app.route("/home")
@app.route("/")
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)


