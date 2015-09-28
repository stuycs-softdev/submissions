from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def default():
  return render_template('index.html', request=request)

@app.route('/test')
def test():
  return render_template('test.html', variable='hi')

if __name__ == '__main__':
  app.run()
