from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	return return render_template ("home.html)

@app.route("/colleges")
@app.route("/colleges/<newName>")
@app.route("/colleges/<city>")
@app.route("/colleges/<city>/<newName>")
@app.route("/colleges/<areaOfStudy>")
@app.route("/colleges/<city>/<areaOfStudy>")
def colleges():
	dict = {"name" : newName,
			"city" : city,
			"subject" : areaOfStudy"}
	return render_template ("colleges.html", d=dict)

if __name__ = "__main__"
	app.debug=True
	app.run(host='0.0.0.0', port=8000)

