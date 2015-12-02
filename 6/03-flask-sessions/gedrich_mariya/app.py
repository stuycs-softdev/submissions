from flask import Flask, render_template, session, redirect, url_for, request
import verifier

app=Flask(__name__)

@app.route('/')
def index():
    cu=''
    if len(session.keys())!=0:
        cu=session[session.keys()[0]]
    else:
        cu='guest'
    return render_template("index.html", current_user=cu)

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':
        user=request.form['username']
        pas=request.form['password']
        if user in session:
            print 'in sesh'
            return '<h1>You are already logged in</h1>'
        else:
            if verifier.verify_user(user,pas):
                session['username']=user
                return '<h2>Login successful!</h2><br><a href="/">Home</a>'
            else:
                return "invalid username and password, try again"
    return render_template('login.html')

@app.route('/logout')
def logout():
    if 'username' in session: 
        session.pop('username', None)
        return '<h2>Logout successful!</h2><br><a href="/">Home</a>'
    else :
        return '<h2>You are not logged in</h2>'
    return redirect(url_for('index'))

@app.route('/signup', methods=['GET','POST'])
def signup():
    if request.method=='POST':
        user=request.form['username']
        pas=request.form['password']
        pas2=request.form['password2']
        if pas==pas2:
            verifier.add_user(user, pas)
            return '<h2>You have successfully signed up</h2><br><a href="/">Home</a>'
        else:
            return "<h2>Passwords don't match, try again</h2>"
    return render_template('signup.html')

if __name__=='__main__':
    app.debug=True
    app.secret_key='placeholder'
    app.run(host='0.0.0.0', port=8000)
    
