from flask import Flask, render_template

app = Flask(__name__)
  
@app.route("/")
def page1():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/interests")
def likes():
    import random;
    rand = random.randint(0,22)
    interests = ["Pizza", "Tigers", "Basketball", "Spongebob", "Babies",
                 "Movies", "Pokemon", "Turtles", "Ice Cream", "T-Rexs",
                 "Computer Science", "Batman", "Whales", "Baseball", "Anime",
                 "Riddles", "Apples", "Sour Candy", "Mr. K's Shirts", 
                 "Birds", "Astronomy", "Murica", "Snow"]
    name = interests[rand]
    if rand == 8:
        name = "IceCream"
    elif rand == 10:
        name = "CS"
    elif rand == 17:
        name = "Sour"
    elif rand == 18:
        name = "K"
    u = "/static/" + name + ".jpg"
    dislikes = {1 : "Fish", 2 : "Sharp Objects", 3 : "Drafting",
                4 : "Telletubbies", 5 : "Donald Trump", 6 : "Cakes", 
                7 : "Noises"}
    ##anime red, astronomy white, basketball white, batman white, cs red,
    ##movies white, pokemon white, riddle white, tiger trex white, sponge red
    c = "black"
    white = [20, 2, 11, 5, 6, 15, 9, 1]
    red = [14, 10, 3]
    for x in white:
        if rand == x:
            c = "white"
    for y in red:
        if rand == y:
            c = "red"
    return render_template("interests.html", name = "Wayez", 
                           interests = interests, dislikes = dislikes, u = u,
                           r = rand, c = c)

if __name__ == "__main__":
    app.debug = True
    app.run(host = '0.0.0.0', port = 8000)

