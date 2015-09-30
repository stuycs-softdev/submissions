from flask import Flask, redirect, request, render_template, session

app = Flask(__name__)

@app.route('/')
def home():
  return render_template('index.html', user=session.get('user', None))

@app.route('/secret')
def secret():
  return render_template('secret.html', authorized=session.get('user'))

@app.route('/login', methods=['GET', 'POST'])
def login():
  if request.method == 'GET':
    return redirect('/')

  print request.form['username']
  print request.form['password']

  if request.form['username'] == 'username' and (
      request.form['password'] == 'password'):
    session['user'] = 'bob'
    return render_template('index.html', msg='Ayy you logged in',
                           user='bob')
  else:
    return render_template('index.html', msg='Invalid credentials')

@app.route('/logout')
def logout():
  del session['user']
  return redirect('/')

if __name__ == '__main__':
  app.debug = True
  app.secret_key = 'abc123'
  app.run()
