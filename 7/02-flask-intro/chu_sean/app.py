from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
	return render_template("Home.html")
	
@app.route("/Second Try")
def secondTry():
	return render_template("Second.html")
	
@app.route("/Third Attempt")
def Third():
	return render_template("Third.html")

if __name__=="__main__":
	app.debug=True
	app.run(host='0.0.0.0',port=7000)