from flask import Flask, render_template

app = Flask(__name__)

import datetime
now = datetime.datetime.now()

@app.route("/")
@app.route("/home")
@app.route("/home/<n>")
def home(n="Ariel"):
    g = "Good evening"
    if now.hour >= 5 and now.hour < 12:
        g = "Good morning"
    elif now.hour >= 12 and now.hour < 17:
        g = "Good afternoon"
    d = {'name':n, 'greeting':g}
    return render_template("home.html",dict=d)

@app.route("/calendar")
def calendar():
    events = open("templates/calendar.txt").readlines()
    cur = 0
    while now.year < int(events[cur][6:10]):
        cur += 1
    while now.month < int(events[cur][3:5]):
        cur += 1
    while now.day < int(events[cur][0:2]):
        cur += 1
    t = "-".join(["%02d" % now.day, "%02d" % now.month, "%04d" % now.year])
    e = ''.join(events[cur:])
    d = {'today':t, 'evlist':e}
    return render_template("calendar.html",dict=d)

@app.route("/tasks")
def tasks():
    tasks = open("templates/tasks.txt").readlines()
    td=""
    dn=""
    for i in tasks:
        if i[0] == '#':
            dn += i[1:]
        else:
            td += i
    d = {'todo':td, 'done':dn}
    return render_template("tasks.html",dict=d)

@app.route("/countdown")
def countdown():
    date = datetime.datetime(2016, 1, 29, 3, 35, 0, 0)
    dif = date - now
    less = str(dif).split(" ")[2]
    d = {'days':dif.days, 'hours':less[0:2], 'mins':less[3:5], 'secs':less[6:8]}
    return render_template("countdown.html", dict=d)

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
