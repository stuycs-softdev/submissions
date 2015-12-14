from flask import Flask, render_template, session, request, redirect, url_for
import csv
from operator import itemgetter



app= Flask(__name__)

@app.route("/",methods=["GET","POST"])
@app.route("/home",methods=["GET","POST"])
def home():
    stat_type = request.form.get('stat_type', '')    
    if stat_type != "":
        top10 = niceify_top_10(get_top_10(stat_type), stat_type)
        return render_template("home.html", top10 = top10)
    return render_template("home.html")

the_list = ['a','b','c','d','e','f','g','h','i','j']

@app.route("/<key_stat>")
def get_top_10(key_stat):
    # Finding top 10 players based on the key_stat of choice (must match a datapoint in the csv file)
    top10 = []
    with open('stats.csv') as stats:
        reader = csv.DictReader(stats)
        for row in reader:
            top10.append({'Player': row['Player'], key_stat : float(row[key_stat])})
    top10 = sorted(top10, key=itemgetter(key_stat), reverse=True)

    res = "<ul>"
    counter = 1
    while counter <= 10:
      r = top10[counter]
      res += "<li>" + r['Player'] + ": " + str(r[key_stat]) + " " + key_stat + "</li>"
      the_list[counter-1] = r['Player']
      counter+= 1
    res += "</ul>"
    return res

@app.route("/list")
def current_list():
    return the_list

@app.route("/home/<player>")
def get_player_stats(player):
    gen_stats = ["Rk","Player","Pos","Age","Tm","G","GS","MP","FG","FGA","FGP","3P","3PA","3P%","2P",\
             "2PA","2P","eFG%","FT","FTA","FTP","ORPG","DRPG","RPG","APG","SPG","BPG","TOV","PF","PPG"]

    player_stats = []
    with open('stats.csv') as stats:
        reader = csv.reader(stats)
        for row in reader:
            if player == row[1]:
                player_stats = row

    if len(player_stats) == 0:
        return "No Player Found"

    res = "<ul>"
    counter = 1
    while counter < len(gen_stats):
        if counter == 1:
            res += "<li><b><u>" + player_stats[counter] + "</u></b></li>"
        else:
            res += "<li>" +  gen_stats[counter] + ": " + player_stats[counter] + "</li>"
        counter += 1
    res += "</ul>"
    return res

if __name__ == "__main__":
    #print "Testing player thing"
    #print get_player_stats("Stephen Curry")
    #print "Testing player thing"
    #print get_player_stats("James Harden")
    #print "Testing player thing"
    #print get_player_stats("David Rothblatt")
    #print "\n\n\n"
    print "\nPPG\n"
    print get_top_10('PPG')
    print "\nlist:\n"
    print current_list()
    print "\nAPG\n"
    print get_top_10('APG')
    print "\nlist:\n"
    print current_list()
    print "\nRPG\n"
    print get_top_10('RPG')
    print "\nlist:\n"
    print current_list()
    print "\nBPG\n"
    print get_top_10('BPG')
    print "\nlist:\n"
    print current_list()
    #print get_top_10('DRPG')
    #print "\nFGP\n"
    #print niceify_top_10(get_top_10('FGP'), 'FGP')
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
