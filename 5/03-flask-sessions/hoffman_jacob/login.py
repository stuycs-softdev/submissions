from flask import Flask, session, request

login = Flask(__name__)
def failed():
    page = "<h1>You have failed to login :(</h1>"
    return page
def notlogged():
    page ="<h1>This is the login page</h1>"
    page = page + '<form method = "POST"><br>Username:<input type = "text" name = "name">'
    page = page + '<br>Password:<input type = "text" name = "password">'
    page = page + '<br>Submit:<input type = "submit" name = "press" value = "login"></form>'
    page = page + '<br> The pass is the answer to this question: If there are 50 apples and you take 10 away, how many apples do you now have? '
    return page
def logged():
    page = '<h1>Nice '+  session['name'] + ' you are not an idiot!! :)</h1>'
    return page
def authorized(password):
    return password == '10'
@login.route("/")
@login.route("/home", methods = ["GET", "POST"])
def home():
    if 'name' in session.keys():
        return logged()
    elif request.method == "POST":
        if (request.form['press'] == 'login') & authorized(request.form['password']):
            session['name'] = request.form['name']
            return logged()
        else:
            return failed()
    return notlogged()
if __name__ == "__main__":
    login.debug = True
    login.secret_key = "string"
    login.run(host = "0.0.0.0", port = 8000)
