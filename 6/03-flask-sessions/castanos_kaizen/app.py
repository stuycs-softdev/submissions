from flask import Flask, render_template, request, session
from flask import redirect, url_for



app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
  if 'logged' not in session:
      session['logged'] = False
  return render_template("home.html")



@app.route("/login",methods=["GET","POST"])
def login():
    if request.method == "GET":
      return render_template("login.html")
    else:
      uname = request.form['username']
      pword = request.form['password']
      button = request.form['button']
      if button=="cancel":
        session['logged'] = False
        return render_template('home.html')

      if request.form['username'] == "user123" and request.form['password'] == "pass123":
        session['logged'] = True
        return render_template("login.html",err="Logged In!",booboo=session['logged'])
      else:
      	session['logged'] = False
        error="Invalid username or password, try again"
        return render_template("login.html",err=error,booboo=session['logged'])



@app.route("/secret",methods=["GET","POST"])
def secret():
  if request.method == "POST":
    if request.form['username'] == "user123" and request.form['password'] == "pass123":
      session['logged'] = True
  if session['logged']:
    return render_template('secret.html')
  else:
    return render_template('login.html',err = "Invalid username or password, try again")



if __name__ == "__main__":
  app.debug = True
  app.secret_key="Don't let this get out"
  app.run(host="0.0.0.0", port=8000)
