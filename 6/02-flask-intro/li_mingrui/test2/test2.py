from flask import Flask, render_template, request
app = Flask(__name__)
@app.route("/game")
def game():
    return render_template("/game.html")

@app.route("/question1", methods = ["POST"])
def question1():
    coins = 100
    betting = request.form["amount1"]
    questionnum = 1
    return render_template("/question1.html", coins = coins, betting = betting, questionnum = questionnum)

@app.route("/question2", methods = ["POST"])
def question2():
    coins = int(request.form["coins"])
    print(coins)
    betting = request.form["amount1"]
    print(betting)
    return render_template("/question2.html", coins = coins, betting = betting)

@app.route("/question3", methods = ["POST"])
def question3():
    coins = int(request.form["coins"])
    print(coins)
    betting = request.form["amount1"]
    print(betting)
    return render_template("/question3.html", coins = coins, betting = betting)

@app.route("/question4", methods = ["POST"])
def question4():
    coins = int(request.form["coins"])
    print(coins)
    betting = request.form["amount1"]
    print(betting)
    return render_template("/question4.html", coins = coins, betting = betting)

@app.route("/question5", methods = ["POST"])
def question5():
    coins = int(request.form["coins"])
    print(coins)
    betting = request.form["amount1"]
    print(betting)
    return render_template("/question5.html", coins = coins, betting = betting)

@app.route("/questionpost", methods = ["POST"])
def questionpost():
    betting = int(request.form["betting"])
    coins = int(request.form["coins"])
    if request.form["questionnum"] == "1":
        question = int(request.form["q1"])
        status = "lost"
        if question == 0:
            coins = coins + betting
            status = "won"
        else:
            coins = coins - betting
        return render_template("/post.html", coins = coins, betting = betting, status = status, questionnum = "2")
    elif request.form["questionnum"] == "2":
        question = int(request.form["q2"])
        status = "lost"
        if question == 5:
            coins = coins + betting
            status = "won"
        else:
            coins = coins - betting
        return render_template("/post.html", coins = coins, betting = betting, status = status, questionnum = "3")
    elif request.form["questionnum"] == "3":
        question = int(request.form["q3"])
        status = "lost"
        if question == 3:
            coins = coins + betting
            status = "won"
        else:
            coins = coins - betting
        return render_template("/post.html", coins = coins, betting = betting, status = status, questionnum = "4")
    elif request.form["questionnum"] == "4":
        question = int(request.form["q4"])
        status = "lost"
        if question == 3:
            coins = coins + betting
            status = "won"
        else:
            coins = coins - betting
        return render_template("/post.html", coins = coins, betting = betting, status = status, questionnum = "5")
    elif request.form["questionnum"] == "5":
        question = int(request.form["q5"])
        status = "lost"
        if question == 3:
            coins = coins + betting
            status = "won"
        else:
            coins = coins - betting
        return render_template("/end.html", coins = coins, betting = betting, status = status)
     
@app.route("/questionpre", methods = ["POST"])
def questionpre():
    coins = int(request.form["coins"])
    if request.form["submitting"] == "Yes":
        questionnum = request.form["questionnum"]
        if request.form["questionnum"] == "2":
            questionword = "second"
            return render_template("/pre.html", coins = coins, questionnum = questionnum, questionword = questionword)
        elif request.form["questionnum"] == "3":
            questionword = "third"
            return render_template("/pre.html", coins = coins, questionnum = questionnum, questionword = questionword)
        elif request.form["questionnum"] == "4":
            questionword = "fourth"
            return render_template("/pre.html", coins = coins, questionnum = questionnum, questionword = questionword)
        elif request.form["questionnum"] == "5":
            questionword = "fifth"
            return render_template("/pre.html", coins = coins, questionnum = questionnum, questionword = questionword)
        else:
            return render_template("start.html")
    else:
        return render_template("start.html")

@app.route("/")
def hello():
    return render_template("start.html")

if __name__ == "__main__":
    app.debug = True
    app.run()
