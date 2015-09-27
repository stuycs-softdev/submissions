from flask import Flask, render_template,request

app = Flask(__name__)

#Variables
nameForm = True
name = ''
d = {'welcome': '',
     'nameForm':nameForm,
     'name':name}

@app.route("/home")
@app.route("/home/")
@app.route("/")
def home():
    nameForm = True
    if name == '' :
        nameForm = True
    return render_template("index.html")

@app.route("/name", methods=['POST'])
def get_name():
    name = request.form['nameform']
    d['name'] = name
    d['welcome'] = 'Welcome ' + name
    nameForm = False
    d['nameForm'] = nameForm
    return render_template("home.html",d=d)


@app.route("/cname", methods=['POST'])
def change_name():
    name = request.form['cname']
    d['name'] = name
    d['welcome'] = 'Welcome ' + name    
    nameForm = False
    d['nameForm']=nameForm
    return render_template("home.html",d=d)

@app.route("/photography")
@app.route("/photography/")
@app.route("/photo")
@app.route("/photo/")
def photography():
    return render_template("photo.html")

@app.route("/about")
@app.route("/about/")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.debug = True
    app.run()