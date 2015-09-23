from flask import Flask
from flask import render_template
from datetime import datetime
app = Flask(__name__)


@app.route('/')
def home():
  return render_template('home.html',time=datetime.now())

@app.route('/name/<name>')
def name(name=None):
  return render_template('name.html',name=name)

if __name__ == '__main__':
    app.debug = True
    app.run('0.0.0.0', port=8000)    
