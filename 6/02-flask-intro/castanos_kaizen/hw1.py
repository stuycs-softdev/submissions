from flask import Flask

app = Flask(__name__)

fruits = ["apple", "banana", "watermelon", "grapes", "cherries"]
places = ["table", "shelf", "chair", "toilet"]
names = ["George Washington", "Richard Nixon", "Barack Obama"]

# the top line is a decorator, and so when it goes to home, it runs the home function.
  
@app.route("/")
@app.route("/home") 
def home():
  import random
  fruit = fruits[random.randrange(0,4)]
  place = places[random.randrange(0,3)]
  name = names[random.randrange(0,2)]
  return """<h1>Welcome to the random sentence generator!</h1>
  <br>
  <h1>""" + name +  " ate the " + fruit + " that he found on the " + place + """</h1>

  """

#debug gives us better debugging messages
#if the host is 127.0.0.1, only you can see the webapp
#ports are essentially endpoints that people can look into, represented by numbers
if __name__=="__main__":
  app.debug = True
  app.run(host='0.0.0.0',port=8000)
