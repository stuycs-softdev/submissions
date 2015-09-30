from flask import Flask, redirect, url_for, render_template, request
import json
import datetime
app = Flask(__name__)


@app.route('/')
def home():
    with open('data.json', 'r') as data:
        posts = json.loads(data.read())
        return render_template('list.html', posts=posts)


@app.route('/new', methods = ['GET', 'POST'])
def new():
    if request.method == 'GET':
        return render_template('new.html')
    elif request.method == 'POST':
        post = {}
        posts = {}
        with open('data.json', 'r') as data:
            post['title'] = request.form.get('title')
            post['text'] = request.form.get('text')
            post['author'] = request.form.get('author')
            post['date'] = datetime.date.today().strftime("%B %d, %Y")
            post['topic'] = request.form.get('topic')
            posts = json.loads(data.read())
            posts.append(post)
        
        with open('data.json', "w") as data:
            json.dump(posts, data, indent=4)
        return redirect('/')

app.debug = True
app.run()
