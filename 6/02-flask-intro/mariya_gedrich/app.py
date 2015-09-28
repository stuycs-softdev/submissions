from flask import Flask, render_template

app=Flask(__name__) 

@app.route('/')
@app.route('/home')
def home():
    return render_template('home.html',title='home')

@app.route('/jelly')
def jelly():
    return render_template('jelly.html')

@app.route('/fish')
def fish():
    return render_template('fish.html')

@app.route('/jellyfish')
def jellyfish():
    return render_template('jellyfish.html')

@app.route('/s')
@app.route('/secret')
@app.route('/s/<rotv>')
@app.route('/secret/<rotv>')
@app.route('/s/<rotv>/<encrypt>')
@app.route('/secret/<rotv>/<encrypt>')
def secret(rotv='0', encrypt='0'):
    import rot
    d={'to_encrypt':encrypt,
       'rotval':rotv}
    d['encrypted']=rot.rotx(encrypt,int(rotv))
    
    return render_template("secret.html",d=d)
    
if __name__=='__main__':
    app.debug=True
    app.run(host='0.0.0.0', port=8000)
