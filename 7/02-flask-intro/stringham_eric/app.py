from flask import Flask, render_template


app = Flask(__name__)
    
@app.route("/home")    
@app.route("/")
def home():
    return "<h1>Hello World!</h1>"

@app.route("/tempage")
def tempage():
    return render_template("template.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host="localhost", port=3333)
