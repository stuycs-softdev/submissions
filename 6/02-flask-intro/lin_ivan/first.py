from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)

events = []
events.append({
	"name":"MOI'M Inception",
	"img":"http://linkis.com/url-image/https://scontent.cdninstagram.com/hphotos-xaf1/t51.2885-15/s750x750/sh0.08/e35/11312158_1548465908742158_119971858_n.jpg",
	"address":"566 LaGuardia Place, New York, NY",
	})
events.append({
	"name":"Mid-Autumn Moon Festival",
	"img":"https://scontent.xx.fbcdn.net/hphotos-xat1/v/t1.0-9/s720x720/11144915_836990889711969_7111602274309884526_n.jpg?oh=cf9539e2e7f3c16e067149e45678d65c&oe=5667B41C",
	"address":"79 Division Street, New York, NY 10002"
	})
events.append({
	"name":"Waku Waku",
	"img":"http://www.japanculture-nyc.com/wp-content/uploads/2015/08/image3.jpg",
	"address":"72 Noble St Brooklyn , NY 11222"
	})
events.append({
	"name":"New York City Comic Con 2015",
	"img":"http://www.newyorkcomiccon.com/RNA/RNA_NewYorkComicCon_V2/2015/images/_framework/nycc-logo-large.png?v=635670626456238965",
	"address":"Javist Center, 655 W 34th St, New York, NY 10001"
	})
events.append({
	"name":"TEDxYouth: Made in the Future",
	"img":"https://yt3.ggpht.com/-yJAJEG_PrHk/AAAAAAAAAAI/AAAAAAAAAAA/nHtSZ9elZkM/s900-c-k-no/photo.jpg",
	"address":"Brooklyn Museum, 200 Eastern Pkwy, Brooklyn, NY 11238"
	})


@app.route("/")
@app.route("/about")
def home():
    return render_template("home.html")

@app.route("/secret")
def about():
    if session['login'] > 0:
        return render_template("about.html", events = events)
    else:
        return redirect("/login")

@app.route("/login", methods=["GET","POST"])
def login():
    if request.method == "GET":
        return render_template("login.html")
    else:
        if request.form.get("username") == "username" and request.form.get("password") == "password":
            session['login'] = 1
            return redirect("/secret")
        else:
            return redirect("/about")

@app.route("/logout")
def logout():
    session['login'] = 0
    return redirect("/login")


if __name__ == "__main__":
    app.secret_key="secretkey"
    app.run(host="0.0.0.0",port=8000)
