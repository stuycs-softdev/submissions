from flask import Flask, render_template, request

app = Flask(__name__)
##Login through dictionary
@app.route("/")
def about():
    return "this is the about page<br>" + """<a href="/login"> <button>Login page</button></a><br>""" + """<a href = "/signup"><button>Register</button></a>"""
@app.route("/signup", methods=["GET","POST"])
def signup():
    if request.method=="GET":
        return render_template("signup.html")
    else:
        button=request.form['button']
        usr=request.form['usr']
        pwd=request.form['pwd']
        if button == "rregister":
            f=open('info/info.txt', 'a')
            f.write(usr + ' ' + pwd)
            f.close()
            return """<a href="/login">Go back to login</a>"""
        else:
            return render_template("signup.html")

@app.route("/login",methods = ["GET","POST"])
def login():
    if request.method=="GET":
        return render_template("login.html")
    else:
        dict = {}
        with open('info/info.txt', 'r') as j:
            for line in j:
                splitLine = line.split()
                dict[(splitLine[0])] = ",".join(splitLine[1:])
                
        button = request.form['button']
        usr=request.form['usr']
        pwd=request.form['pwd']
        if button =="Login":
            if pwd == dict.get(usr):
                return render_template("success.html")
            else:
                return render_template("login.html")
        
            
        




if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)



