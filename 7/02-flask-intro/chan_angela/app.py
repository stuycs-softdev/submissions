from flask import Flask, render_template, request
import util

app = Flask(__name__)

@app.route("/home")
@app.route("/")
def home():
    page = """<h1>Home Page</h1>
    <button><a href="/about">To the About Page!</a></button>
    <button><a href="/pictures">Free Pictures!</a></button>
    <br> <br>
    <button><a href="/login">Visit Your Profile</a></button>
    """
    return page

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/pictures")
def picture():
    return render_template("pictures.html")

@app.route("/profile")
@app.route("/profile/<fname>")
@app.route("/profile/<fname>/<lname>")
@app.route("/profile/<fname>/<lname>/<animal>")
def profile(fname="",lname="",animal=""):
    prof = {"fname" : fname,
            "lname" : lname,
            "animal" : animal}
    return render_template("profile.html",d=prof)

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        fname = request.form["fname"]
        lname = request.form["lname"]
        password = request.form["password"]
        sub = request.form["sub"]
        if sub=="Cancel":
            return render_template("login.html")
        if util.check(password)!=0:
            page = "<h1>Logged in</h1>\n"
            page += '<button><a href="/profile/'
            page += fname
            page += "/" + lname
            if util.check(password)==1:
                page += "/Cats"
            else:
                page += "/Dogs"
            page += '">View Your Profile</a></button>'
            return page
        else:
            error = "Your password did not contain 'cat' or 'dog'."
            return render_template("login.html",error=error)
    
if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
