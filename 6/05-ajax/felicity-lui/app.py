from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/login")
def getProfit():


if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port = 8000)
