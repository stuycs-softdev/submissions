from flask import Flask, jsonify, render_template, request
app = Flask(__name__)
 
@app.before_request
def before_request():
    if request.path != '/':
        if request.headers['content-type'].find('application/json'):
            return 'Unsupported Media Type', 415
 
@app.route('/')
def index():
    return render_template('index.html')
 
@app.route('/echo/', methods=['GET'])
def echo():
    ret_data = {"value": request.args.get('echoValue')}
    return jsonify(ret_data)
	
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8000)