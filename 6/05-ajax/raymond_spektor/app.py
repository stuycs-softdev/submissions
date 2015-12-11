import urllib2, json
from flask import Flask, render_template, request
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html")

@app.route("/random")
def random():
    return render_template("random.html")

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
favlist=[150,730,162,688,556];
index = 0;
@app.route("/carousel")
def carousel():
    global index
    global favlist
    if index >= len(favlist):
        index+=1
    else:
        index = 0

    url = "http://xkcd.com/{}/info.0.json".format(favlist[index])
    result = json.loads(urllib2.urlopen(url).read())
    return result["img"];

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "YAY XKCD"
    app.run(host = "0.0.0.0", port = 8000);
