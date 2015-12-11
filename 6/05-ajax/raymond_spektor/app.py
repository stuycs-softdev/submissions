import urllib2, json
from flask import Flask, render_template, request
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template("layout.html")

@app.route("/search")
def search():
    return render_template("search.html")

@app.route("/scrolling")
def scrolling():
    return render_template("scrolling.html")


@app.route("/getImg", methods=['GET','POST'])
def getImg():
    """Arguments: Integer that is the id number of a comic
       Returns: String url of the image associated with the comic
    """
    url = "http://xkcd.com/{}/info.0.json".format(request.form['textbox'])
    result = json.loads(urllib2.urlopen(url).read())
    return result["img"];

@app.route("/carousel")
def carousel():
    url = "http://xkcd.com/{}/info.0.json".format(request.args.get("data"))
    result = json.loads(urllib2.urlopen(url).read())
    return result["img"];

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "YAY XKCD"
    app.run(host = "0.0.0.0", port = 8000);
