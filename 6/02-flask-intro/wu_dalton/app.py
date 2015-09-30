from flask import Flask, render_template, session
from flask import redirect, url_for

app = Flask(__name__)

@app.route('/')
def default():
	return '<a href="/about">about</a>'

@app.route('/login', methods=['GET', 'POST'])
def login():
	if request_method == 'GET':
		return render_template('login.html')
	else:
		username = request.form['username']
		password = request.form['password']
		button = request.form['button']
	
	if utils.authenticate(username, password):
		return 

@app.route('/<foo>')
@app.route('/<foo>/<bar>')
def foo(foo=':/', bar=42):
	return render_template('foo.html', foo=foo, bar=int(bar))

@app.route('/about')
def about():
	return render_template('about.html')

if __name__=="__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
