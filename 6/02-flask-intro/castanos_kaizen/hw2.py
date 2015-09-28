from flask import Flask, render_template

app = Flask(__name__)
  
@app.route("/")
@app.route("/home")
def home():
  return "<title>Nothing to see here</title>"
@app.route("/code/<code>")
def code(code=""):
  codes = ["1", "2", "3"]
  d = {}
  d['fname1'] = "Connor"
  d['lname1'] = "[REDACTED]"
  d['dob1'] = "9/12/1997"
  d['occ1'] = "Janitor"
  d['status2'] = "Dead"
  d['fname2'] = "Toby"
  d['lname2'] = "Wilkinson"
  d['dob2'] = "4/30/1994"
  d['occ2'] = "Producer"
  d['status2'] = "Alive"
  d['fname3'] = "[REDACTED]"
  d['lname3'] = "Johnson"
  d['dob3'] = "9/12/[REDACTED]"
  d['occ3'] = "Programmer"
  d['status3'] = "[REDACTED]"
  return render_template("code.html", d = d, code = code, codes = codes)

if __name__=="__main__":
  app.debug = True
  app.run(host='0.0.0.0',port=8000)
