from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")

def home():
    text = """<h1><font color="blue">Home</font></h1>
    <font face="Brush Script MT" size="+3" color="#FF0000"> Welcome</font>"""
    return text

@app.route("/page2")
def page2():
    return render_template("page2.html")

@app.route("/page3")
def page3():
    return render_template("page3.html")

if __name__== "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
        
