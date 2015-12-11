from flask import Flask, render_template, request
import json
import utils

app = Flask(__name__)


@app.route('/')
@app.route('/home')
def home():
    return render_template("home.html")


@app.route('/update')
def update():
	information = utils.getInfo()
	print information
	return json.dumps(information)


@app.route('/search')
def search():
    stock = request.args.get("stockTicker")
    investment = request.args.get("initialInvestment")
    information = utils.getReturn(stock, investment)
    return json.dumps(information)

if __name__ == "__main__":
    app.debug = True
    app.secret_key = utils.secret_key
    app.run('0.0.0.0', port=8000)
