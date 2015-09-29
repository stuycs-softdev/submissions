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

def validate(artist):
    if d.has_key(artist):
        return True
    else:
        return False

def returnd():
    return d

def returnartists():
    return d2
