from flask import Flask, redirect, url_for, render_template, request, session
import json
import datetime
app = Flask(__name__)


@app.route('/')
def home():
    with open('posts.json', 'r') as data:
        posts = json.loads(data.read())
        return render_template('list.html', posts=posts)


@app.route('/signup', methods = ['GET', 'POST'])
def signup():
	if session.user != '':
		return redirect('/')
	if request.method == 'GET':
		return render_template('signup.html')
	if request.method == 'POST':
		user = {}
		user.username = request.form.get('username')
		user.password = request.form.get('password')
		user.name = request.form.get('name')
		user.email = request.form.get('email')
		with open('users.json', 'r') as data:
			users = json.loads(data.read())
			if users[user.username] == None:
				users[user.username] = user
				with open('users.json', "w") as data:
					json.dump(users, data, indent=4)
					return redirect('/', user=user)
			else:
				return render_template('signup.html', error='Username already taken')


@app.route('/login', methods = ['GET', 'POST'])
def login():
	if session.user != '':
		return render_template(url_for('home'))

	if request.method == 'GET':
		return render_template(url_for('login'))
	elif request.method == 'POST':
		with open('users.json', 'r') as data:
			users = json.loads(data.read())

			username = request.form.get('username')
			password = request.form.get('password')

			user = users[username]

			if user:
				if user.password == password:
					session.user == user.username
					return render_template(url_for('home'))
				else:
					return render_template(url_for('login'), error='Password is incorrect')
			else:
				return render_template(url_for('login'), error='No user with that username')


@app.route('/new', methods = ['GET', 'POST'])
def new():
	if session.user == '':
		return render_template(url_for('login'), error='You must be signed in to make a post')
	if request.method == 'GET':
    return render_template('new.html')
  elif request.method == 'POST':
    post = {}
    posts = {}
    with open('posts.json', 'r') as data:
      post['title'] = request.form.get('title')
      post['text'] = request.form.get('text')
      post['author'] = request.form.get('author')
      post['date'] = datetime.date.today().strftime("%B %d, %Y")
      post['topic'] = request.form.get('topic')
			posts = json.loads(data.read())
      posts[session.user].append(post)

      with open('posts.json', "w") as data:
				json.dump(posts, data, indent=4)
      return redirect('/')

@app.route('/<username>')
def read(username):
	with open('posts.json', 'r') as data:
		posts = json.loads(data.read())
		if posts[username] == None:
			return redirect('/')
		else:
			return render_template('list.html', posts=posts[username])

app.debug = True
app.run()
