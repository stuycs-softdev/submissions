from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    return "<!DOCTYPE html><html><head><title>Indexsu</title></head><body><h1>WECLOME TO DA INDEXSURU</h1></body></html>"

if __name__ == "__main__":
    app.debug = True
    app.run(host="localhost", port=3333)
