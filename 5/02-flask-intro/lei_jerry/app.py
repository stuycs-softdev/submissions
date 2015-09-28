from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
#def home():
 #   return render_template("home.html")
@app.route("/<lastin>")
@app.route("/<lastin>/<text22>")
def lasty(lastin="",text22s=""):

    d = {'last':lastin,
         'text22':text22s
         }
    return render_template("home.html", d = d)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)



