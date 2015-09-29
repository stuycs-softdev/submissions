from flask import Flask, render_template, request


app = Flask(__name__)

def authenticate(un,pw):
    if un == "Felicity" and pw == "Ng":
        return True
    else:
        return False

@app.route("/login")
def loginScreen():
    if request.method == "GET":
        return render_template("login.html")
    else:
        un = request.form['username']
        pw = request.form['password']
        button = request.form['button']
        if authenticate(un,pw):
            return render_template("loggedIn.html")
        else:
            error = "Invalid username and/or password"
            return render_template("login.html",err=error)

@app.route("/Narnia")
def Narnia():
    return render_template("Narnia.html")

@app.route("/out")
def out():
    return render_template("out.html")

@app.route("/")
@app.route("/home")
def index():
    return render_template("home.html",args = request.args)

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port = 8000)
