from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
	return 'Hello'

@app.route('/about')
def about():
	return 'Built by Chris Grant'

if __name__ == '__main__':
	app.debug = True
	app.run('localhost', port=3000)

