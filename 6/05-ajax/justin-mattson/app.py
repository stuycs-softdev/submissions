from flask import Flask, render_template, send_file

app = Flask(__name__)



@app.route("/")
@app.route("/home")
def home():

    return render_template("index.html")

@app.route("/image")
@app.route("/image/<num>", methods = ["GET"])
def image(num = 1):
    return "static/images/" + str(num) + ".jpg"
    #return send_file("static/images/1.jpg")

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
