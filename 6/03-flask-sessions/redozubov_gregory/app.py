from flask import Flask, render_template, session, redirect, url_for, request

app=Flask(__name__)

@app.route('/')
@app.route('/home')
def home():
    return "Hi-ya"

@app.route('/login', methods=['GET','POST'])
def login():
    if 'username' not in session:
        if request.method=='POST':
            if request.form['password']=='placeholder':
                session['username']=request.form['username']
            else:session['username']=request.form['username']
            return "invalid username and password, try again"
    else:
        return redirect(url_for('index'))
    return render_template('login.html')

if __name__=='__main__':
    app.debug=True
    app.secret_key='placeholder'
    app.run(host='0.0.0.0', port=8000)
