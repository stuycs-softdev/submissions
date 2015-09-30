from flask import Flask, render_template, session, redirect, url_for, request

app=Flask(__name__)

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/login', methods=['GET','POST'])
def login():
    if request.method=='POST':
        if request.form['password']=='placeholder':
            session['username']=request.form['username']
            return "<h2>Login successful!</h2>"
        else:
            session['username']=request.form['username']
            return "invalid username and password, try again"
    return render_template('login.html')

@app.route('/logout')
def logout():
    if 'username' in session: 
        session.pop('username', None)
        return "<h2>Logout successful!</h2>"
    return redirect(url_for('index'))

if __name__=='__main__':
    app.debug=True
    app.secret_key='placeholder'
    app.run(host='0.0.0.0', port=8000)
    
