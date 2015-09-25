from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("/index.html")

@app.route("/about")
def about():
    return render_template("/about.html")

@app.route("/random")
def random():
    import random
    rand = random.randrange(1, 100)
    return render_template("/random.html", rand=rand)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
