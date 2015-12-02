from flask import Flask, render_template, request, session, url_for, redirect

app = Flask (__name__)

@app.route("/", methods=["GET", "POST"])
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    if (request.form['uname'] == request.form['pword']):
        session['auth'] = True
        session['uname'] = request.form['uname']
        return redirect(url_for("profile"))

@app.route("/profile")
def profile():
    if not session['auth'] :
        return redirect(url_for("login"))
    uname = session['uname']
    return render_template("profile.html", uname = uname)

@app.route("/about")
def about():
    return render_template("about")

@app.route("/logout")
def logout():
    session['uname'] = ""
    session['auth'] = False
    return redirect(url_for("login"))


  
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "HelloWorld"
    app.run(host = '127.0.0.1', port = 4141)
