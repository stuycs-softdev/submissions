from flask import Flask, render_template, request, redirect, session, url_for
import shelve, hashlib

app = Flask(__name__)

@app.route("/intro", methods=["GET","POST"])
def intro():
    if request.method=="GET":
        return render_template("intro.html")
    else:
        listy= shelve.open('userlist.dat')
        m=hashlib.md5()
        m.update(str(request.form['pass']))
        user=str(request.form['user'])
        password=m.hexdigest()
        if listy.has_key(user)==False or str(request.form['pass']).len()>7:
            listy[user]=password
            session['user']=user
        else:
            return redirect("/intro")
        return redirect("/main")

@app.route("/main")
def main():
    if 'user' in session:
        return render_template("main.html", user=session['user'])
    else:
        return '''
        <a href="{{url_for('login')}}">please log in first</a>
        '''
    
@app.route("/login", methods=["GET", "POST"])
def login():
    if 'user' in session:
        return redirect ("/main")
    listy=shelve.open('userlist.dat')
    if request.method=="GET":
        return render_template('login.html')
    else:
        user=str(request.form['user'])
        password=str(request.form['pass'])
        #listy=shelve.open('userlist.dat')
        m = hashlib.md5()
        m.update(password)
        if listy.has_key(user) and m.hexdigest()==listy[user]:
            if 'user' not in session:
                session['user']=user
            return redirect("/main")
        return render_template('login.html')

@app.route("/logout")
def logout():
    session.pop('user')
    return render_template('logout.html')

@app.route("/", methods=["GET","POST"])
def index():
    if request.method=="GET":
        return render_template("start.html")
    else:
        if request.form['press']=="log in":
            return redirect("/login")
        elif request.form['press']=="sign up":
            return redirect("/intro")
            

if __name__ == "__main__":
   app.debug = True
   f = open('key.txt','r')
   m = hashlib.md5()
   m.update(f.read())
   app.secret_key=m.hexdigest()
   f.close()
   app.run(host="0.0.0.0", port=8000)
       
