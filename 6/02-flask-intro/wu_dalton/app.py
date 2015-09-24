from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def default():
	return '<a href="/about">about</a>'


@app.route('/about')
def about():
	return render_template('about.html')

if __name__=="__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
