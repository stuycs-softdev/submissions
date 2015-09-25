from flask import Flask, render_template

app = Flask(__name__)


@app.route("/primes")
def primes():
    a = [True] * 10000
    a[0] = False
    a[1] = False
    i = 2
    while i < 10000:
        if a[i]:
            j = 2*i
            while j < 10000:
                a[j] = False
                j+=i
        i+=1
    s = "<h1>PRIMES</h1><ol>"
    for i in range (10000):
        if a[i]:
            s+="<li>"+str(i)+"</li>"
    s+="</ol>"
    print s
    return s


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
