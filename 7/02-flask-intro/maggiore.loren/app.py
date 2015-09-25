from flask import Flask, render_template
from random import randrange
app = Flask(__name__)



@app.route("/")
@app.route("/home")
def home():
	return render_template("home.html")

@app.route("/lotto")
def lotto():
	page = """
	<!DOCTYPE html>
	<html>
	<style>
	body {background-color: #CC99FF;}
	h1 {font-family: "Courier"; color: black; text-align: center;}
	p {font-family: "Courier"; font-size: 20px;}
	</style>
	<title>Snazzy WebApp</title>
	<body>
	<h1></h1>
	<center>
	<p>  I don't want to win the lotto. I want to go home! <i> <a href="/home">Go Home, Loser</a> </i>  </p>
	</center>
	"""
	x1 = randrange(0,100)
	x2 = randrange(0,100)
	x3 = randrange(0,100)
	x4 = randrange(0,100)
	x5 = randrange(0,100)
	page += "<center> <p> Still Here? Your numbers are %d %d %d %d %d Congrats!" % (x1, x2, x3, x4, x5)
	page += "</body></html>"
	return page



if __name__ == "__main__":
	app.debug = True
	app.run(host='127.0.0.1', port = 4141)