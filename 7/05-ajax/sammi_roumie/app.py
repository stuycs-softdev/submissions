from flask import Flask, render_template, session, redirect, url_for, request
import helper

app = Flask(__name__)

@app.route("/", methods=['GET','POST'])
def home():
    if request.method == 'GET':
        return render_template("index.html")
    else:
        return 1
    
@app.route("/profile")
def profile():
    return open("static/data.json").read()

    
@app.route("/image")
def image():
    name = request.args.get("name")
    return helper.get_image(name)
    



if __name__ == "__main__":
   app.debug = True
   app.secret_key = "Don't store this on github"
   app.run(host="0.0.0.0", port=8000)
