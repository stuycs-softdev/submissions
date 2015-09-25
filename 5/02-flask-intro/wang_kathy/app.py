from flask import Flask, render_template 

app = Flask(__name__) 

@app.route("/page")

def page(): 
    return render_template("page.html")


@app.route("/stuffs") 

def stuffs(): 
    return render_template("stuffs.html") 

if __name__ == "__main__": 
    app.debug = True 
    app.run(host='0.0.0.0', port=8000) 
