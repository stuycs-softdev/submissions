from flask import Flask,render_template
app = Flask(__name__)

#reusing code I made during Intro II

@app.route('/')
def index():
	return render_template("index.html")

@app.route('/breadcats')
@app.route('/breadcats/<catID>')
def breadcats(catID="no cats"):
	return render_template("breadcats.html",catID=catID)

@app.route('/donutcats')
@app.route('/donutcats/<catID>')
def donutcats(catID="no cats"):
	return render_template("donutcats.html",catID=catID)

if __name__ == '__main__':
	app.run(debug=True)