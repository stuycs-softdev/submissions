from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)

@app.route("/")
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/secret")
def secret():
  if session['user'] == "username":
    return render_template("secret.html", events = [])
  else:
    return redirect("/login")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        if request.form.get("username") == "username" and request.form.get("password") == "password":
            session['user'] = "username"
            return redirect("/secret")
        else:
            return redirect("/about")

@app.route("/logout")
def logout():
    session['user'].pop()
    return redirect("/login")


if __name__ == "__main__":
    app.secret_key="secretkey"
    app.run(host="0.0.0.0",port=8000)
