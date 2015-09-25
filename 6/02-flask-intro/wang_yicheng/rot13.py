from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def root():
    return '<a href="rot13">Rot-13</a>'

@app.route('/rot13')
def rot13():
    return render_template('rot13.html', text = '', result='')

@app.route('/rot13', methods=['POST'])
def rot13_with_input():
    text = request.form['text']
    result = text.encode('rot13')
    return render_template('rot13.html', text = text, result=result)


if __name__ == '__main__':
    app.debug = True;
    app.run(host='0.0.0.0', port = 8000)
