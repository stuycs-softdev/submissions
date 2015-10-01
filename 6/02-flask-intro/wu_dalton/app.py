from flask import Flask, render_template, session
from flask import redirect, url_for

app = Flask(__name__)

@app.route('/')
def about(error=''):
	return render_template('about.html', error=error)

@app.route('/login', methods=['GET', 'POST'])
def login():
	if request_method == 'GET':
		return render_template('login.html')
	else:
		username = request.form['username']
		password = request.form['password']
	
	if utils.authenticate(username, password):
		return render_template(url_for('hidden'))

@app.route('/42')
def hidden():
	if request_method == 'GET':
		return render_template('hidden.html')
	else:
		button = request.form['button']
	
	if button == 'logout':
		return render_template(url_for('about'), error='Logged out.')

if __name__=="__main__":
	app.debug = True
	app.run(host='0.0.0.0',port=8000)
