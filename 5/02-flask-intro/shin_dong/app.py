from flask import Flask, render_template

app = Flask(__name__)

@app.route("/newabout")
def newabout():
    return 'screw u >:('

@app.route("/about")
def about():
    page='''
<h1>About</h1>
<br>
<ol>
<li>hello</li>
<li>u look good today</li>
<li>xoxo</li>
</ol>
'''
    return page

@app.route("/templater")
def templater():
    d = {}
    d['swag']='zamansky has swag'
    listy = ['when','i','rule','the','world']
    return render_template('templater.html',d=d,listy=listy)

@app.route("/winner/<name>")
def winner(name):
    return render_template('gongratz.html',name=name)
  
@app.route("/home")
def home():
    return "<h1>Home Page</h1><h2>Hello World</h2>"

if __name__ == "__main__":
    app.debug=True
    app.run(host='0.0.0.0', port=8000)
    
