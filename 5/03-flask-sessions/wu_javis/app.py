from flask import Flask, render_template, session, redirect, url_for, request

app = Flask (__name__)

@app.route("/home",methods=["GET","POST"])
def home():
    if 'member' not in session:
        session['member']=False
    
    if request.method=="GET":
        if session['member']==True:
            return render_template("home.html",access=True)
        else:
            return render_template("home.html")
    else:
        button=request.form["button"]
        if button=="create":
            newuser=request.form["newuser"]
            pword=request.form["newpass"]
            if newuser not in session:
                session[newuser]=pword
            return redirect("/home")
        elif button=="go":
            username=request.form["user"]
            password=request.form["pass"]
            if username in session:
                if password==session[username]:
                    session['member']=True
                    return redirect("/home")
            else:
                    error="Wrong username or password"
                    return render_template("home.html",error=error)
        elif button=="logout":
            session['member']=False
            return render_template("home.html")
        

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/secret")
def secret():
    return render_template("secret.html")

if __name__=="__main__":
    app.debug=True
    app.secret_key="stuff"
    app.run(host="0.0.0.0", port=8000)
    
