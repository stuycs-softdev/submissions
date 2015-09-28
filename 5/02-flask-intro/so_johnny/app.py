from flask import Flask, render_template

app = Flask(__name__)

# define the directory for the app
@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/lucky")
def lucky_number():
    import random
    r = random.randrange(1,100)
    return render_template("lucky.html",random=r)

@app.route("/artist/")
@app.route("/artist/<name>")
def artist(name=""):
    neyosongs = ["Beautiful Monster","Closer","Let Me Love You","Mad",
                 "Miss Independent","One in a Million","So Sick"]
    linkinparksongs = ["Breaking The Habit","Crawling","Faint","From the Inside",
                       "In The End","Numb","What I've Done"]
    greendaysongs = ["American Idiot","Boulevard of Broken Dreams",
                     "Holiday","Wake Me Up When September Ends"]
    brunomarssongs = ["Grenade","Just The Way You Are"]
    backstreetboyssongs = ["I Want It That Way"]
    coldplaysongs = ["Paradise","Viva la Vida"]
    nsyncsongs = ["Bye Bye Bye"]
    nellysongs = ["Just A Dream","Over and Over"]
    onerepublicsongs = ["Counting Stars","If I Lose Myself"]
    seankingstonsongs = ["Fire Burning"]
    tinietempahsongs = ["Written in the Stars"]
    secondsofsummersongs = ["Amnesia"]
    d = {"ne-yo":neyosongs,"linkin_park":linkinparksongs,
            "green_day":greendaysongs,"bruno_mars":brunomarssongs,
            "backstreet_boys":backstreetboyssongs,"coldplay":coldplaysongs,
            "nsync":nsyncsongs,"nelly":nellysongs,"onerepublic":onerepublicsongs,
            "sean_kingston":seankingstonsongs,"tinie_tempah":tinietempahsongs,
            "5_seconds_of_summer":secondsofsummersongs}
    d2 = {"artists":d.keys()}
    if d.has_key(name):
        person=name
        return render_template("artist.html",dic=d,stagename=person)
    else:
        return render_template("artist.html",dic=d2,stagename="artists")

@app.route("/home")
@app.route("/")
# define a function to be run everytime someone goes to your app
#      returns a string that represents the homepage
def home():
    return render_template("home.html")

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
    # accessible on 'localhost:8000'
