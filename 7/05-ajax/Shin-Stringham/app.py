from flask import Flask, render_template
import os.path

app = Flask(__name__)

@app.route('/')
def index():
    return '<h1>Index</h1>'

if __name__ == '__main__':
    app.debug = True
    app.secret_key = 'w34tr98uarn pahesitr ga e'
    app.run(
        host='0.0.0.0',
        port=8080 if os.path.isfile('./cloudy') else 8000,
    )