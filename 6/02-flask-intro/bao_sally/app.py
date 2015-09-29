from flask import Flask, render_template, request

app = Flask(__name__)

ans = {"ans1": "hummingbird moth", "ans2": "mimic octopus"}


def checkans(guess, ans):
    return guess == ans
    

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/about")
def about():
    return render_template("about.html")



@app.route("/guess", methods = ["GET", "POST"])
@app.route("/guess/", methods = ["GET", "POST"])
def guess():
    if request.method == "GET":
        return render_template("guess.html")
    else:
        answer = request.form['answer']
        if checkans(answer, ans["ans1"]):
            return "<h1>Correct! <a href = '/guess2'>You may proceed</a></h2>"
        else:
            error = "Try again"
            return render_template("guess.html", error = error)



@app.route("/guess2", methods = ["GET", "POST"])
@app.route("/guess2/", methods = ["GET", "POST"])
def guess2():
    if request.method == "GET":
        return render_template("guess2.html")
    else:
        answer = request.form['answer']
        if checkans(answer, ans["ans2"]):
            return "<h1>Wonderful! <a href = '/home'>Return</a></h2>"
        else:
            error = "Try again"
            return render_template("guess2.html", error = error)


if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
