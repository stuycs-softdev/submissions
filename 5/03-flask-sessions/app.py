from Flask import Flask, render_template, redirect, url_for, session

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/login", methods = ["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        return "HI"

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "ping"
    app.run(port=8000)
