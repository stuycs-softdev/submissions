from flask import Flask, render_template, request
from flask import redirect, url_for
import utils

app = Flask(__name__)


@app.route('/')
def about(message=''):
	return render_template('about.html', message=message)

@app.route('/login', methods=['get', 'post'])
def login():
	if request.method == 'get':
		return render_template('login.html')
	else:
		username = request.form['username']
		password = request.form['password']
		
		if utils.authenticate(username, password):
			return render_template(url_for('hidden'))
		else:
			message = 'Invalid username or password'
			return render_template('login.html', message=message)

@app.route('/42', methods=['get', 'post'])
def hidden():
	if request.method == 'get':
		return render_template('hidden.html')
	
	button = request.form['button']
	
	if button == 'logout':
		return render_template(url_for('about'), message='Logged out.')


if __name__=="__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
