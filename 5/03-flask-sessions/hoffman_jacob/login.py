from flask import Flask, render_template, session, request



login = Flask(__name__)
@login.route("/failed", methods = ["GET","POST"])
def failed():
    page = "<h1>You have failed to login :(</h1>"
    return page
@login.route("/notlogged", methods = ["GET","POST"])
def notlogged():
    page ="<h1>This is the login page</h1>"
    page = page + '<form method = "POST"><br>Username:<input type = "text" name = "name">'
    page = page + '<br>Password:<input type = "text" name = "password">'
    page = page + '<br>Submit:<input type = "submit" name = "press" value = "login"></form>'
    page = page + '<br> The pass is the answer to this question: If there are 50 apples and you take 10 away, how many apples do you now have? '
    return page
@login.route("/logged", methods = ["GET","POST"])
def logged(username):
    page = '<h1>Nice + ' + username + 'you are not an idiot!! :)</h1>'
    return page
def authorized(password):
    return password == '10'
@login.route("/")
@login.route("/home", methods = ["GET","POST"])
def home():
    if 'username' in session.keys():
        return logged()
    elif request.method == "POST" & request.form['press'] == "login":
        if authorize(request.form('password')):
            session['username'] = request.form('name')
            return logged(session['username'])
        else:
            return failed()
    return notlogged()
if __name__ == "__main__":
    login.debug = True
    login.secret_key = "string"
    login.run(host = "0.0.0.0", port = 8000)
