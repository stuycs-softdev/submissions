from flask import Flask, render_template, request
import utils

app = Flask(__name__)

#When somxeone goes to "/home", do the thing (must return string).
@app.route("/index", methods=["GET","POST"])
@app.route("/", methods=["GET","POST"])
def index():
    if request.method=="GET":
        return render_template("index.html")
    else: 
        button = request.form['button']
        if button == "logout":
            return render_template("logout.html")
        if button == "go!":
            city=request.form['city']
            shirt=request.form['shirt']
            shorts=request.form['shorts']
            sweater=request.form['sweater']
            jacket=request.form['jacket']
            hat=request.form['hat']
            umbrella=request.form['umbrella']
            d = {'city':city,
                 'shirt':shirt,
                 'shorts':shorts,
                 'sweater':sweater,
                 'jacket':jacket,
                 'hat':hat,
                 'umbrella':umbrella}
            return render_template("backEnd.html",d=d)
        else:
            uname=request.form['username']
            pword=request.form['password']
            if utils.authenticate(uname,pword):
                return render_template("weather.html")
            else:
                return render_template("index.html")

@app.route("/weather", methods=["GET","POST"])
def weather():
    if request.method=="GET":
        return render_template("weather.html")
    else:
        return render_template("/backEnd.html")
        

@app.route("/backEnd")
def backEnd():
    button = request

#Debug is true to get better error messages
#Run the app. The host COULD be IP address, but normally put it down as 0.0.0.0 so that anyone can use the app.
if __name__=="__main__":
    app.debug=True
    app.run(host='0.0.0.0',port=8000)
