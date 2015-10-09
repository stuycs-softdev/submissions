from flask import Flask, render_template, session, redirect, url_for, request

app = Flask(__name__)

@app.route("/")
@app.route("/about")
def about():
	return render_template("about.html")

@app.route("/reset")
def reset():
	return redirect(url_for('login'))
	
@app.route("/login", methods=['GET','POST'])
def login():
	if request.method == 'GET':
		message = "Please Login"
		return render_template("login.html", err = message)
	else:
		username = request.form['username']
		password = request.form['password']
		button = request.form['button']
		if username == "felipe" and password == "password":
			return render_template("loggedin.html")
		else:
			error = "Invalid username or password"
			return render_template("login.html", err = error)

if __name__ == "__main__":
	app.debug = True
	app.run(host = '127.0.0.1', port = 8000)
