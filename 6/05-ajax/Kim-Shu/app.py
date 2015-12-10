from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port = 8000)
