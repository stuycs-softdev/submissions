from flask import Flask, render_template

app = Flask(__name__)

@app.route("/grade-check")
def gradeCheck():
    return render_template("defGrade.html")

@app.route("/grade-check/<Fdigit>")
def checkSpecific(Fdigit = ""):
    import random;
    
    d = {'grade' : random.randrange(10,100),
         'id' : Fdigit
    }
    
    return render_template("gradeCheck.html",d = d)

if __name__ == "__main__":
    app.debug = True
    app.run(host = "0.0.0.0", port = 8000)
