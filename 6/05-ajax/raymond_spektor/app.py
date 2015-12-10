import urllib2, json
from flask import Flask, render_template
from bs4 import BeautifulSoup

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
    return render_template("index.html");

def getImgLink(num):
    """Arguments: Integer that is the id number of a comic
       Returns: String url of the image associated with the comic
    """
    url = "http://xkcd.com/{}/info.0.json".format(num)
    result = json.loads(urllib2.urlopen(url1).read());
    return result["img"];

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "YAY XKCD"
    app.run(host = "0.0.0.0", port = 8000);
