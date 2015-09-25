from flask import Flask, render_template

app=Flask(__name__) 

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/jelly')
def jelly():
    return render_template('jelly.html')

@app.route('/fish')
def fish():
    return render_template('fish.html')

@app.route('/jellyfish')
def jellyfish():
    return render_template('jellyfish.html')

if __name__=='__main__':
    app.debug=True
    app.run(host='0.0.0.0', port=8000)
