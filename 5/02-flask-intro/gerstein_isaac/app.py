from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/hidden", methods=["GET", "POST"])
def hidden():
    print request.form
    return render_template("hidden.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
