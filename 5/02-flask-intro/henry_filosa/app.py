from flask import Flask, render_template, request
from datetime import datetime
app = Flask(__name__)


@app.route('/')
def home():
  return render_template('home.html',time=datetime.now())

@app.route('/name', methods=["GET","POST"])
@app.route('/name/<name>')
def name():    
  return render_template('name.html',args=request.args)

@app.route('/madlibs/')
@app.route('/madlibs/<firstname>/<lastname>/<title>')
def madlibs(firstname="",lastname="",title="Mr"):
  d={'first':firstname,
     'last':lastname,
     'title':title}
  return render_template('madlibs.html',d=d)

if __name__ == '__main__':
    app.debug = True
    app.run('0.0.0.0', port=8000)    
