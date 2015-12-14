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


def get_top_10(key_stat):
    # Finding top 10 players based on the key_stat of choice (must match a datapoint in the csv file)
    top10 = []
    with open('stats.csv') as stats:
        reader = csv.DictReader(stats)
        for row in reader:
            top10.append({'Player': row['Player'], key_stat : float(row[key_stat])})
    result = sorted(top10, key=itemgetter(key_stat), reverse=True)
    return result

@app.route("/<key_stat>")
def niceify_top_10(key_stat):
    res = ""
    counter = 1
    top10List = get_top_10(key_stat)
    while counter <= 10:
      r = top10List[counter]
      res = res + r['Player'] + ": " + str(r[key_stat]) + " " + key_stat + "<br>"
      counter+= 1
    return res

if __name__ == "__main__":
    
    print "\nPPG\n"
    print niceify_top_10('PPG')
    print "\nAPG\n"
    print niceify_top_10('APG')
    print "\nRPG\n"
    print niceify_top_10('RPG')
    print "\nBPG\n"
    print niceify_top_10('BPG')
    print "\nDRPG\n"
    print niceify_top_10('DRPG')
    #print "\nFGP\n"
    #print niceify_top_10(get_top_10('FGP'), 'FGP')
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
