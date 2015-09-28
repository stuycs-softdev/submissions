from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	return render_template("Home.html")

@app.route("/About_Dragons")
def About_Dragons():
	dict = {"chara1":"Eats Princesses (Western)",
			"chara2":"Revered as a symbol of Wisdom (Eastern)",
			"chara3":"Usually has a pair of wings"}
	return render_template("About.html",d=dict)
	
@app.route("/Types_of_Dragons")
def Types_of_Dragons():
	list = ["Water Dragon", "Fire Dragon", "Ice Dragon", "Celestial Dragon", "Jade Dragon"]
	return render_template("Types.html", l = list)

if __name__=="__main__":
	app.debug=True
	app.run(host='0.0.0.0',port=8000)