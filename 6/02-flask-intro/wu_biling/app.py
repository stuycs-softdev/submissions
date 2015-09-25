from flask import Flask

app= Flask (__name__)

@app.route("/")
def default():
    return render_template("default.html")
@app.route("/home")
def home():
    return render_template("home.html")
@app.route("/katz")
def katz():
    return render_template("katz.html")

if __name__ = "__main__":
    app.debug=True
    app.run(host="0.0.0.0",port=8000)
