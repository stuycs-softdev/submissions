from flask import Flask, render_template, request, session
from flask import redirect, url_for
app = Flask(__name__)

@app.route("/", methods=["GET","POST"])
@app.route("/home", methods=["GET","POST"])
def home():
    if request.method=="GET":
        if 'uname' in session.keys() and 'pword' in session.keys():
            return redirect(url_for('index'))
        return render_template("home.html")
    else:
        session['uname'] = request.form['username']
        session['pword'] = request.form['password']
        return redirect(url_for('index'))

@app.route("/index")
def index():
    if session['uname']=="ray" and session['pword']=="shaco":
        return render_template("index.html",name=session['uname'])
    else:
        session.clear()
        return render_template("index2.html")

@app.route("/logout")
def logout():
    session.clear()
    return render_template("logout.html")
        

if __name__=="__main__":
    app.debug = True
    app.secret_key="EVIL LAUGH"
    app.run(host='0.0.0.0',port=8000)
