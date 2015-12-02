from flask import Flask, render_template, request
import authenticate

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        username = request.form['Username']
        password = request.form['Password']
        button = request.form['button']
        if button == "Cancel":
            return render_template("login.html")
        if authenticate.authenticate(username,password):
            return render_template("secret.html")
        else:
            wrong = 'Hint #1: The Username starts with J and the password starts with P.'
            return render_template("login.html", wrong=wrong)



if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0", port=8000)

    


