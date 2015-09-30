from flask import Flask, render_template, sessions

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return "404"

@app.route("/about")
def about():
    return "404"

@app.route("/hidden")
def hidden():
    return "404"

@app.route("/login")
def login():
    return "404"

@app.route("/logout")
def logout():
    return "404"

if __name__ == "__main__":
   app.debug = True
   app.secret_key = "secret_key"
   app.run(host="0.0.0.0", port=8000)
