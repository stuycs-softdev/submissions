from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/team")
def team():
    return render_template("team.html")

@app.route("/animal")
def animal():
    return render_template("animal.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
   
#Running on http://localhost:8000/
