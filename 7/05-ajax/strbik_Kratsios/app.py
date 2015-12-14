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
        return render_template("ajax1.html", top10 = top10)
    return render_template("ajax1.html")

@app.route("/<key_stat>")
def get_top_10(key_stat):
    top10 = []
    with open('stats.csv') as stats:
        reader = csv.DictReader(stats)
        for row in reader:
            top10.append({'Team': row['Team'], key_stat : float(row[key_stat])})
    top10 = sorted(top10, key=itemgetter(key_stat), reverse=True)

    res = ""
    counter = 1
    i = 1
    while counter <= 10:
      r = top10[counter]
      res = res + str(i)+". "+ r['Team'] + ": " + str(r[key_stat]) + " " + key_stat + "<br>"
      counter+= 1
      i+= 1
    return res

def get_team_stats(team):
    with open('stats.csv') as stats:
        reader = csv.DictReader(stats)
        for row in reader:
            if team == row['Team']:
                return row
    return "No team found"

if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)