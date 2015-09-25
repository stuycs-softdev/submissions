from flask import Flask,render_template

app=Flask(__name__)

@app.route("/home")
@app.route("/")

def home():
    return render_template("home.html")


@app.route("/about")
def about():
    aboutpage='''
    <!DOCTYPE HTML>

    <title>About</title>
    <body>
    Pokemon are very lazy creatures. They are so lazy that they don't bother with css or <br>
    any styling at all. Does that mean that I am a pokemon?<br>

    <br>

    <marquee behavior="scroll" direction="left"><img src="static/slaking.png" alt="slaking"></marquee>
    </body>
    '''
    return aboutpage
 
if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
