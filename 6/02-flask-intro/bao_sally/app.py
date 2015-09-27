from flask import Flask, render_template

app = Flask(__name__)

ans = {"ans1": "hummingbird moth", "ans2": "", "ans3": ""}

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/guess")
@app.route("/guess/")
@app.route("/guess/<answer>")
def guess(answer = ""):
    result = ""
    if answer == ans["ans1"]:
        result = "Correct!"
    elif answer != "":
        result = "Incorrect. Please try again"
    d = {"guess": answer, 
             "result": result}
    return render_template("guess.html", d = d)

@app.route("/guess2")
@app.route("/guess2/")
@app.route("/guess2/<answer>")
def guess2(answer = ""):
    return render_template("guess2.html")




if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)
