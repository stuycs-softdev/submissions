from flask import Flask, render_template, request, session

app=Flask(__name__)

@app.route('/')
@app.route('/about')
@app.route('/about/')
def about():
    if 'logged' not in session:
        session.logged=False
    s = session
    return render_template('about.html',s = session)

@app.route('/login')
@app.route('/login/')
def login():
    return render_template('login.html',s = session)

@app.route('/secret', methods = ["GET","POST"])
def secret():
    if request.method == "POST":
        if request.form['username'] == "coolcait98" and request.form['password'] == 'wootwoot':
            session.logged = True
    if session.logged == True:
        return render_template('secret.html',s = session)
    else:
        return render_template('login.html',s = session,error = "Invalid Username/password")

if __name__=="__main__":
    app.debug = True
    app.secret_key="Keep this a secret! Shshshshshh"
    app.run('0.0.0.0', port=8000)