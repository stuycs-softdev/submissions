from flask import Flask, render_template

app = Flask(__name__)

@app.route("/about")
def about():
    return render_template("about.html")
    
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/dancers")
def dancers():
    import random
    r = random.randrange(1,4)
    f = {'name':"Franklin Yu",
         'team':"ACA",
         'piece':"Tennis Court",
         'pic':"/static/fy.jpg"}

    b = {'name':"Bam Martin",
         'team':"GRV",
         'piece':"OOH KILL'EM",
         'pic':"/static/Bam.jpg"}

    m = {'name':"Markus Pe Benito",
         'team':"GRV",
         'piece':"Powerful",
         'pic':"/static/markus.png"}

    if r==1:
        return render_template("dancers.html",d=f)
    elif r==2:
        return render_template("dancers.html",d=b)
    else:
        return render_template("dancers.html",d=m)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
    
