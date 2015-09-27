from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/interests")
def interests():
    return render_template("interests.html")

@app.route("/music")
def generalMusic():
    return render_template("generalMusic.html")

@app.route("/music/<dj>")
def music(dj = ""):
    AandBDescript = 'Above & Beyond is composed of three members, Jono Grant, Tony McGuinness, and Paavo Siljamaki. They have been producing music for about fifteen years, and are still among the most popular DJs in the electronic scence. Their first album, "Tri-State", includes most of their trance hits. As they evolved and adapted to the now popular house music genre, they released their second album, "Group Therapy", and also started a weekly podcast under the same name. Their most recent album, We Are All We Need, features more of their house music, and features multiple collaborators. They even have their own record labels, Anjunabeats and Anjunadeep, which serve as labels for their songs and up and coming DJs.'
    AandBPics = ['http://dj-rankings.com/tpls/dj/images/djs_logo/ABOVE_%26_BEYOND_logo.jpg', 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Above_%26_Beyond_2011.jpg', 'http://static.aboveandbeyond.nu/assets/logos/abgt320.jpg' ]
    AandBSongs = ["Alone Tonight (feat. Richard Bedford)","Thing Called Love (feat. Richard Bedford)","Sun & Moon (feat. Richard Bedford)","We're All We Need (feat. Zoe Johnston)","Peace of Mind. (feat Zoe Johnston)"]
    AandBDict = {"realname": "Above & Beyond", "descript": AandBDescript, "pics": AandBPics, "songs": AandBSongs}
    artyDescript = 'Arty is a popular Russian DJ who specializes in progressive house. He previously released music under a different name, Alpha 9, but decided to change it to Arty in 2011. His songs strike the perfect balance between melody and bass. Some of his best are the results of collaborations with other producers.'
    artyPics = ['http://gonyc.net/newsletters/canl/images/surrender-arty.jpg', 'http://www.totalassault.com/assets/images/3875.jpg', 'http://www.freakenergy.ru/uploads/posts/2012-07/1343297989_arty_edc.jpg']
    artySongs = ["Rebound (with Mat Zo)","Together We Are (feat. Chris James)", "Grand Finale (feat. Fiora)","Flashback", "Up All Night (feat. Angel Taylor)"]
    artyDict = {"realname": "Arty", "descript": artyDescript, "pics": artyPics, "songs": artySongs}
    d = {"aboveandbeyond": AandBDict, "arty": artyDict} 
         #"audien": audienDict, "shm": shmDict}
    return render_template("music.html", djName = dj, djDict = d)

@app.route("/info")
def info():
    return render_template("info.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
