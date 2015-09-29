from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def default():
  return render_template('index.html', request=request)

@app.route('/test')
def test():
  return render_template('test.html', data=request.args)

@app.route('/post', methods=['GET', 'POST'])
def post():
  if request.method == 'GET':
    return render_template('post.html', data=request.args)
  else:
    return render_template('post.html', data=request.form)

if __name__ == '__main__':
  app.run(debug=True)
