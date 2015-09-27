from flask import Flask, render_template, request
import md5

def encrypt(mechanism, message):
    if mechanism in ['rot13', 'base64', 'hex']:
        return message.encode(mechanism)
    if mechanism == 'md5':
        m = md5.new()
        m.update(message)
        return m.hexdigest()

app = Flask(__name__)

@app.route('/')
def root():
    return '<a href="rot13">Rot-13</a>'

@app.route('/encryption')
@app.route('/encryption/')
@app.route('/encryption/<mechanism>')
def enc(mechanism = 'all'):
    if mechanism == 'all':
        encryption = 'Keyless Encryptions'
    else:
        encryption = mechanism
    return render_template('encryption.html', text = '', results=[], mechanism = mechanism, Encryption = encryption)

@app.route('/encryption', methods=['POST'])
@app.route('/encryption/', methods=['POST'])
@app.route('/encryption/<mechanism>', methods=['POST'])
def enc_with_input(mechanism = 'all'):
    results = []
    text = request.form['text']
    if mechanism == 'all':
        for m in ['rot13', 'base64', 'hex', 'md5']:
            results.append((m, encrypt(m, text)))
            Encryption = 'Keyless Encryptions:'
    else:
        results.append((mechanism, encrypt(mechanism, text)))
        Encryption = mechanism
    return render_template('encryption.html', text = text, results=results,mechanism=mechanism, Encryption = Encryption)


if __name__ == '__main__':
    app.debug = True;
    app.run(host='0.0.0.0', port = 8000)
