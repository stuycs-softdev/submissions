from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

@app.route("/coolhouse")
def coolhouse():
    return render_template("coolhouse.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/icecream")
def icecream():
    import random
    r = random.randrange(0,3)
    l=["http://www.benjerry.com/files/live/sites/systemsite/files/flavors/products/us/pint/milk-and-cookies-detail.png",
       "http://www.eonline.com/eol_images/Entire_Site/201353/rs_560x415-130603120021-560.americone.ls.6313.jpg",
       "http://actofrage.com/wp-content/uploads/2013/11/caramel-hat-trick-all-ben-and-jerrys-flavors.jpg",
       "http://img1.wikia.nocookie.net/__cb20110908200059/bakingrecipes/images/2/2c/Ben_jerrys_bostoncremepie.jpg",
       ]

    return render_template("icecream.html",flavor=l[r])

if __name__ == "__main__":
    app.debug = True
    app.run(host="0.0.0.0",port=8000)
