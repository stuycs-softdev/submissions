from flask import Flask, render_template
from random import randint, choice
import string

app = Flask(__name__)

# @app.route will run the function directly below it!

@app.route("/")
@app.route("/home")
@app.route("/home/")
def home():
    return render_template("home.html")

@app.route("/inspire")
@app.route("/inspire/")
@app.route("/inspire/<num>")
@app.route("/inspire/<num>/")
def inspire(num=-1):
    if int(num) == -1:
        num = randint(1000,10000)
    try:
        if int(num) < 1000 or int(num) >= 10000:
            num = randint(1000,10000)
    except:
        num = randint(1000,10000)
    return render_template("inspiration.html", RANDOM_NUM=str(num))

def get_random_youtube_hash():
    # I didn't want to leave this on for infinity hours, so here:
    # A nice bash one liner to grab PewDiePie video hashes from YouTube
    # youtube-dl --yes-playlist --get-id https://www.youtube.com/watch\?v\=Hurz0ZQbbMU\&list\=UU-lHJZR3Gqxm24_Vd_AJ5Yw > valid_hashes.txt
    return str(choice(list(open('valid_hashes.txt')))).strip()

@app.route("/youtube")
@app.route("/youtube/")
@app.route("/youtube/<hash>")
@app.route("/youtube/<hash>/")
def youtube(hash=""):
    if hash == "":
        hash = get_random_youtube_hash()
    return render_template("youtube.html", RANDOM_HASH=str(hash))

@app.route("/sao")
@app.route("/sao/")
@app.route("/sao/<episode>")
@app.route("/sao/<episode>/")
def sao(episode=0):
    try:
        if int(episode) < 0 or int(episode) >= 7:
            episode = randint(0,7)
    except:
        # Clearly the episode param is not an int
        episode = randint(0,7)
    d = {} # Create new dictionary
    # sao.txt generated with the following command:
    # youtube-dl --yes-playlist --get-id https://www.youtube.com/playlist\?list\=PLvTFVgN7IAZ5i28K75ocPWALV0_Gpv0Q1 > sao.txt
    eps = list(open('sao.txt'))
    # For the sake of using a dictionary... this is greatly redundant
    for i in range(1,len(eps) + 1):
        d[str(i)] = eps[i - 1].strip()
    return render_template("sao.html", DICT=d, EP=eps[int(episode)].strip(), NUM=int(episode))


if __name__ == "__main__":
    app.debug = True
    app.run(host='127.0.0.1', port=8000)
