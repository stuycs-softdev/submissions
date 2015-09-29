from flask import Flask, render_template
import random
import string

app = Flask(__name__)

def random_generator(size):
    chars=string.ascii_uppercase + string.digits
    return ''.join(random.choice(chars) for x in range(size))

@app.route("/password")
def password():
    number = random.randrange(1,100)
    a = random_generator(8)
    b = random_generator(10)
    d = {"num" : number, "8char" : str(a), "10char" : str(b)}
    return render_template("password.html",info = d);


@app.route("/about")
def about():
    return render_template("about.html",)

@app.route("/")
@app.route("/home")
def home():
    page = """
    <!-- Latest compiled and minified CSS --> <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">  <!-- jQuery library --> <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>  <!-- Latest compiled JavaScript --> <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <link type="text/css" rel="stylesheet" href="/static/main.css"/>
    <h1>Welcome To My Site!</h1>
    <hr>
    <h2>Links to other places:</h2>
    <ul>
      <li><a href = "password"> Passwords </a></li>
      <li><a href="about"> About </a></li>
    </ul>
    """
    return page

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=7999)
