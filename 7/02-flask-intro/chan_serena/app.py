from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")

def home():
    d = {}
    fruits = ['mango', 'papaya', 'strawberry', 'pineapple', 'apple', 'pear',
              'watermelon', 'guava', 'kiwi', 'dragonfruit', 'banana']
    return render_template("home.html")
<h1><font color="blue">Home</font></h1>
    <button><a href="page2.html"> Page 2 </a></button>
    <button.<a href="page3.html"> Page 3 </a></button>

@app.route("/page2")
def page2():
    return render_template("page2.html")

@app.route("/page3")
def page3():
    return render_template("page3.html")

if __name__== "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
