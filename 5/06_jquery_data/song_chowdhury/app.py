from flask import Flask, render_template, request, redirect, url_for, session

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/getprofile")
def getprofile():
    print "starting getprofile"
    print "ending getprofile"
    return "profile"


if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)
