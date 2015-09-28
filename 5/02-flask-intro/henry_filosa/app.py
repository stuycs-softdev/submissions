from flask import Flask
from flask import render_template
from datetime import datetime
app = Flask(__name__)


@app.route('/')
def home():
  return render_template('home.html',time=datetime.now())

@app.route('/name')
@app.route('/name/<name>')
def name(name=None):
  return render_template('name.html',name=name)

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
