from flask import Flask, render_template, session, request, redirect,url_for

app = Flask(__name__)
@app.route("/")
def home():
    if 'logged' in session:
        return redirect(url_for("secret"))
    else: 
        return render_template("home.html")

@app.route("/secret", methods=["GET","POST"])
def secret():
    if request.method == "POST":
        if request.form['username'] == "hoyinho" and request.form['password'] == "hoyin":
            session['logged'] = "Ho Yin"
    if 'logged' not in session:
        return redirect(url_for("login"))
    return render_template("secret.html")

@app.route("/about")
def about():
    return render_template("about.html",s=session)

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("about"))

@app.route ("/login")
def login(error = None):
    if 'logged' in session:
        return redirect(url_for("secret"))
    return render_template("login.html")

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "Some random key"
    app.run(host='0.0.0.0', port = 8000)
    
