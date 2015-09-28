from flask import Flask, render_template

app = Flask(__name__)


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/specs")
def oldaboutpage():
    return render_template("specs.html")
@app.route("/purchase")
def purchase():
    page = """
    <h1>Where to Buy the <br><img src="http://s17.postimg.org/fxw7e6vcf/download.png"/></h1>
    <img src="http://library.corporate-ir.net/library/17/176/176060/mediaitems/93/a.com_logo_RGB.jpg"/><br>
    <button><a href="http://www.amazon.com/s/ref=nb_sb_noss_2?url=search-alias%3Daps&field-keywords=samsung+galaxy+5++i5500">Amazon</a></button><br>
    <img src="http://dribbble.s3.amazonaws.com/users/6540/screenshots/728582/ebay.jpg"/><br>
    <button><a href="http://www.ebay.com/sch/i.html?_from=R40&_trksid=p2050601.m570.l1313.TR12.TRC2.A0.H0.Xsamsung+galaxy+5+i5500.TRS0.G%7C1%7C0&_nkw=samsung+galaxy+5+i5500&_sacat=0">Ebay</a></button><br>
    <a href="/home">Back to the Home Page</a>
    """
    return page
    
@app.route("/home")
@app.route("/")
def homepage():
    page="""
    <h1>Home Page</h1><h2>for the</h2><img src="http://s17.postimg.org/fxw7e6vcf/download.png"/><br><h2>'Official' Website</h2>
    <hr>
    <img src="http://cdn2.gsmarena.com/vv/bigpic/samsung-i5500-corby.jpg" alt="image" />
    <button><a href="/about">about</a></button>
    <button><a href="/specs">specs</a></button>
    <button><a href="/purchase">where to buy</a></button>
    <br>
    <img src="http://www.consumerinfoline.com/wp-content/uploads/2014/05/samsung-logo.jpg"/>
"""
    return page


if __name__ == "__main__":
    app.debug = True
    app.run(host='0.0.0.0', port=8000)
