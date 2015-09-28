from flask import Flask, render_template
from parse import parse

app = Flask(__name__)

@app.route("/")
@app.route("/home")
@app.route("/query=")
def home():
	return render_template("Parser.html", expression=0)

@app.route("/query=<e>")
def result(e):
	e = e.replace('q', '%').replace('z', '/')
	return render_template("Parser.html", expression=e, answer=parse(e))

if __name__ == "__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
