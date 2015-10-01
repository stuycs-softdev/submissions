from flask import Flask, render_template, request, session, redirect
import utils

app = Flask(__name__)

@app.route('/')
@app.route('/about')
@app.route('/about/')
def about():
    if 'user' not in session:
        session['user'] = False
    return render_template('about.html', s = session)

@app.route('/login')
@app.route('/login/')
def login(error = None):
    return render_template('login.html', s = session)

@app.route('/logout')
@app.route('/logout/')
def logout():
    session['logged'] = False
    return redirect('/about')

@app.route('/secret', methods=["GET","POST"])
def secret():
    if request.method=="POST":
	    name = request.form['username']
	    password = request.form['password']
	    if utils.authenticate(name, password):
		    session['logged'] = True
    if session['logged'] == True:
	    #name = request.form['username']
	    return render_template('secret.html', s = session)
    else:
        return redirect('/login')

if __name__=="__main__":
    app.debug = True
    app.secret_key = "Two can keep a secret if one of them is dead"
    app.run('0.0.0.0', port=8000)

