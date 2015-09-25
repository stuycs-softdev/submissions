from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	page = """
	<h1>Home</h1>
	<hr>
	<ol>
	<li>This page essentially serves no purpose.</li>
	</ol>
	"""
	return page

@app.route("/about")
def about():
	return render_template("about.html")

if __name__ = "__main__"
	app.debug=True
	app.run(host='0.0.0.0', port=8000)
