from flask import Flask, render_template, session, request, redirect, url_for
import csv
from operator import itemgetter

app = Flask(__name__)

@app.route("/",methods=["GET","POST"])
@app.route("/home",methods=["GET","POST"])
def home():
    student_info = request.form.get('student_info', '')    
    if student_info != "":
        top10 = niceify_top_10(get_top_10(student_info), student_info)
        return render_template("ajax.html", top10 = top10)
    return render_template("ajax.html")

@app.route("/<info>")
def get_top_10(info):
    top10 = []
    with open('students.csv') as data:
        database = csv.DictReader(data)
        for row in database:
            top10.append({'Team': row['Team'], info : float(row[info])})
    top10 = sorted(top10, key=itemgetter(info), reverse=True)

    space = ""
    counter = 1
    i = 1
    while counter <= 10:
      n = top10[counter]
      space = space + str(i)+". "+ n['first_name'] + str(i)+". "+ n['last_name']": " + str(n[info]) + " " + info + "<br>"
      counter+= 1
      i+= 1
    return space

def get_school_data(student):
    with open('students.csv') as data:
        database = csv.DictReader(data)
        for row in database:
            if student == row['first_name'] + ' ' + row['last_name']:
                return row
    return "Sorry, that student does not go to this school."

if __name__ == "__main__":
    app.debug = True
    app.secret_key = "This is a secret key"
    app.run('0.0.0.0', port=8000)

