from flask import Flask, render_template, session, request, redirect, url_for
import csv
from operator import itemgetter



app= Flask(__name__)

@app.route("/",methods=["GET","POST"])
@app.route("/home",methods=["GET","POST"])
def home():    
    return render_template("home.html")

def test(key_stat):
    top10 = []
    with open('stats.csv') as stats:
        reader = csv.DictReader(stats)
        for row in reader:
            top10.append({'Player': row['Player'], 'PPG' : row['PTS']})
    result = sorted(top10, key=itemgetter('PPG'), reverse=True)
    counter = 1
    while counter <= 10:
        r = result[counter]
        print str(counter) + ". " + r['Player'] + ": " + r['PPG'] + " PPG" 
        counter +=1 

if __name__ == "__main__":
    test('ppg')
    #app.debug = True
    #app.run(host='0.0.0.0',port=8000)
