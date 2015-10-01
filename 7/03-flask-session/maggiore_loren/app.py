from flask import Flask, render_template, request, session, url_for, redirect

app = Flask (__name__)

@app.route("/")
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    if (request.form['uname'] == request.form['pword']):
        session['auth'] = True
        session['points'] = 50
        uname = request.form['uname']
        session['uname'] = uname
        f = open(uname, "w")
        f.write('50')
        f.close()
        return redirect(url_for("profile"))

@app.route("/profile")
def profile():
    if 'auth' not in session:
        return redirect(url_for("login"))
    uname = session['uname']    
    f = open(uname, "r")
    profPoints = int(f.read())
    session['points'] = profPoints
    
    return render_template("profile.html", uname = uname, points = profPoints)

@app.route("/givePoints/<user>")
def givePoints():
    if 'auth' not in session:
        return redirect(url_for("login"))
    f = open(user, "r")
    points = int(f.read())
    f.close()
    points += request.form['givePoints']
    f = open(user, "w")
    f.write(str(points))
    f.close()
    return "success.html"
    
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "HelloWorld"
    app.run(host = '127.0.0.1', port = 4141)
