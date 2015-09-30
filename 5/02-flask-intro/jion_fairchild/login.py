from flask import Flask, render_template, request, session
from security import authenticate

app = Flask(__name__)

@app.route("/login", methods = ["GET","POST"])
def login():
    if 'loginName' in session.keys():
        print "we're here"
        return render_template('forward.html')
    elif request.method == "POST":
        print "we're there"
        uname = request.form['uname']
        password = request.form['password']
        button = request.form['button']
        if button == "login" and authenticate(uname,password):
            print "NEWSTUFF"
            session['loginName'] = uname
            return render_template('forward.html')
        
    return render_template('login.html')

@app.route("/secret")
def secret():
    if 'loginName' in session.keys():
        return render_template("secret.html", name = session['loginName'])
    else:
        return render_template("login.html")
    
@app.route("/about")
def about():
    return render_template("about.html")
if __name__ == "__main__":
    app.debug = True
    app.secret_key = "THIS IS A SECRET!!!!!"
    app.run(host = "0.0.0.0", port = 8001)
