from flask import Flask,render_template
app = Flask(__name__)

#reusing code I made during Intro II

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/breadcats')
def breadcats():
	return render_template("breadcats.html")

@app.route('/donutcats')
def donutcats():
	return render_template("donutcats.html")

if __name__ == '__main__':
	app.run(debug=True)