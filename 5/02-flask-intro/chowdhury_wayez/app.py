from flask import Flask, render_template

app = Flask(__name__)

likes = ["Pizza", "Tigers", "Babies", "Basketball", "Spongebob", "Movies", 
         "Pokemon", "Turtles", "Ice Cream", "Computer Science", "Batman",
         "Whales", "Baseball", "Anime", "Football", "Riddles", "Apples",
         "Sour Candy"]

dislikes = {1 : "fish", 2 : "Drafting", 3 : "Donald Trump"}
  
@app.route("/")
def page1():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/interests")
def likes():
    return render_template("interests.html", name = "Wayez", l = likes, 
                           d = dislikes)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)

