from flask import Flask, render_template, session, request, redirect, url_for
from os import urandom, path
from hashlib import sha512
from uuid import uuid4
from re import search

app = Flask(__name__)

@app.route('/')
def index():
	if 'username' in session:
		return render_template('index.html')
	return redirect(url_for('login'))

@app.route('/logout')
def logout():
	del session['username']
	return redirect(url_for('login'))

@app.route('/login', methods=['GET', 'POST'])
def login():
	if request.method == 'POST':
		if not path.exists('accounts.txt'):
			return render_template('login.html',
				message='Username or password is incorrect.')
		accounts = open('accounts.txt', 'r')
		data = [line.split('|') for line in accounts.read().split('\n')[:-1]]
		accounts.close()
		for line in data:
			if (
				request.form['username'] == line[0] and
				sha512(request.form['password'] + line[2]).hexdigest() == line[1]
				):
				session['username'] = line[0]
				return redirect(url_for('index'))
		return render_template('login.html',
			message='Username or password is incorrect.')
	return render_template('login.html')

@app.route('/register', methods=['GET', 'POST'])
def register():
	if request.method == 'POST':
		if len(request.form['password']) > 7:
			if bool(search(r'\d', request.form['password'])):
				accounts = open('accounts.txt', 'a')
				salt = uuid4().hex
				new_data = (
					request.form['username'] + '|' +
					sha512(request.form['password'] + salt).hexdigest() + '|' +
					salt + '\n'
					)
				accounts.write(new_data)
				accounts.close()
				session['username'] = request.form['username']
				return redirect(url_for('index'))
			return render_template('register.html',
				message='Password must contain both letters and digits.')
		return render_template('register.html',
			message='Password must be at least 8 characters long.')
	return render_template('register.html')

if __name__ == "__main__":
   app.debug = True
   app.secret_key = urandom(24)
   app.run(host="0.0.0.0", port=8000)