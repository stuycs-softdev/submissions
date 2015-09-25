from flask import Flask, render_template
from random import randrange
app = Flask(__name__)

@app.route("/")
@app.route("/home")

def home():
	return """<h1>Classic names</h1>
	<ol>
   	<li>Rodney Copperbottom</li> 
    <li>Mr. Potatohead </li>
    <li>Olaf the snowman</li>
    <li>Elmo and Big Bird</li>
    </ol>
    """ 


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
    
