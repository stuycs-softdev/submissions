from flask import Flask, render_template
from random import randrange
app = Flask(__name__)



@app.route("/")
@app.route("/home")
def home():
	return render_template("home.html")

@app.route("/lotto")
@app.route("/lotto/<nums>")
def lotto(nums = None):
	
	lottoNums = {}
	if nums == None:
		nums = randrange(0,50)
	else:
		nums = int(nums)
	for i in range(nums):
		lottoNums[i] = randrange(0,100)

	lottof = ""
	for i in lottoNums:
		lottof += " %d " %(lottoNums[i])
	
	return render_template("lotto.html", nums = nums, lottof = lottof)



if __name__ == "__main__":
	app.debug = True
	app.run(host='127.0.0.1', port = 4141)