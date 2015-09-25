from flask import Flask, render_template

app = Flask(__name__)

# define the directory for the app
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/oldabout")
def oldaboutpage():
    page = """
    <h1> About</h1>
    <br>
    <ol>
    <li> About 1 </li>
    <li> About 2 </li>
    <li> About 3 </li>
    """
    return page

@app.route("/lucky")
def lucky_number():
    import random
    r = random.randrange(1,100)
    s = """
    <a href="https://www.youtube.com/watch?v=5NV6Rdv1a3I"> Get Lucky </a>
    """
    display = "Not lucky enough?"
    return """
    <center>
    <h1>Your Lucky Number : %d </h1>
    <br>
    <br>
    <br>
    <h2> Not Lucky Enough? </h2>
    <h3> Well then... You should %s </h3>
    <br>
    <h4> Disclaimer: You may not necessarily "get lucky" if you're that unlucky :( </h4>
    <br>
    <br>
    <a href=".."> Back to Home! </a>
    </center> 
    """ % (r,s)

@app.route("/home")
@app.route("/")
# define a function to be run everytime someone goes to your app
#      returns a string that represents the homepage
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
    # accessible on 'localhost:8000'
