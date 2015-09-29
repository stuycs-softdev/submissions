from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/about")
def about():
    page = render_template("about.html")
    return page

@app.route("/gallery")
def gallery():
    page = render_template("gallery.html")
    return page

if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0", port = 8000)
