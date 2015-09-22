from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def default():
  return '<a href="/test">test</a>'

@app.route('/test')
def test():
  return render_template('index.html', variable='hi')

if __name__ == '__main__':
  app.run()
