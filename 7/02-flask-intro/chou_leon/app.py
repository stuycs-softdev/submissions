from flask import Flask
import random
app = Flask(__name__)

@app.route("/")
def hello():
    FILE = open("templates/hello.html", 'r')
    number = random.randrange(0,100,5)
    return FILE.read() % (number)
    FILE.close()

@app.route("/fire")
def fire():
    FILE = open("templates/fire.html",'r')
    return FILE.read() % ("static/fire.jpg")
    FILE.close()

if __name__ == "__main__":
    app.debug = True
    app.run()
