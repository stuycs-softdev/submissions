from flask import Flask,render_template,session,url_for,request, redirect

app = Flask(__name__)

#reusing code I made during Intro II
@app.route('/', methods=["GET","POST"])
@app.route('/login', methods=["GET","POST"])
def login():
	print request
	if request.method == "GET":
		return render_template("login.html")
	else:
		if request.form['username'] == "bread" and request.form['password'] == "fish":
			return redirect('/secret')
		else:
			return render_template("login.html",error="incorrect username or password")

@app.route('/secret', methods=["GET","POST"])
def secret():
	if request.method == "GET":
		return render_template("breadcats.html")
	else:
		return redirect('/login')

if __name__ == '__main__':
	app.run(debug=True)