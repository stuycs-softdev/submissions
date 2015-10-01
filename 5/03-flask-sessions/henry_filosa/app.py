from flask import Flask, render_template, request, session, redirect

app=Flask(__name__)

@app.route('/')
@app.route('/about')
def about():
    #Track whether the user has logged in
    if 'logged' not in session:
        session['logged']=False
    return render_template('about.html',s=session)

@app.route('/login')
def login(error=None):
    return render_template('login.html',s=session)

#When a user clicks a button to logout, direct them here, log them out and redirect them
@app.route('/logout')
def logout():
    session['logged'] = False
    return redirect('/about')

@app.route('/secret', methods=["GET","POST"])
def secret():
    #If the user has attempted to log it, check whether correct
    if request.method=="POST":
        if request.form['username']=="henry" and request.form['password']=='12345':
            session['logged']=True
    #If logged in, load all the secrets
    if session['logged']==True:
        return render_template('secret.html',s=session)
    #Otherwise, return them to the login page
    else:
        return redirect('/login')

if __name__=="__main__":
    app.debug = True
    app.secret_key="Don't tell anyone!"
    app.run('0.0.0.0', port=8000)

