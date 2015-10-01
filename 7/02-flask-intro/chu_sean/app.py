from flask import Flask, render_template, request, session, redirect, url_for
import check
app = Flask(__name__)

@app.route("/")
@app.route("/home", methods= ["GET","POST"])
def home():
	if request.method=="GET":
		return render_template("Home.html")
	else:
		uname = request.form['Username']
		pword = request.form['Password']
		button = request.form['button']
		if button=="Cancel":
			return render_template("Home.html")
		if check.authent(uname,pword):
			session['status'] = "in"
			return redirect(url_for("Types_of_Dragons"))
		else:
			return render_template(("Home.html"))
		
@app.route("/Logout")
def logout():
	session['status'] = ""
	return redirect(url_for("home"))
	
@app.route("/About_Dragons")
def About_Dragons():
	dict = {"chara1":"Eats Princesses (Western)",
			"chara2":"Revered as a symbol of Wisdom (Eastern)",
			"chara3":"Usually has a pair of wings"}
	return render_template("About.html",d=dict)
	
@app.route("/Types_of_Dragons")
def Types_of_Dragons():
	if session['status'] != "in":
		return redirect(url_for("home"))
	else:
		list = ["Water Dragon", "Fire Dragon", "Ice Dragon", "Celestial Dragon", "Jade Dragon"]
		return render_template("Types.html", l = list)

if __name__=="__main__":
	app.debug=True
	app.secret_key="DRAGON,DRAGON,DRAGON"
	app.run(host='0.0.0.0',port=12000)
