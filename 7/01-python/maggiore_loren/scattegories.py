#scattegories ? 
#provides basic framework for playing
#still need pencils and other players 
#TODO: fully automate + AI ? 

import random, time

numPlayers = 0
timer = 180 #seconds
numCategories = 12
categoryList = []
letter = ""

def getNum():
	
	num = 0
	loop = True
	while loop:
		try:
			num = input('')
			num = int(num)
			loop = False
		except:
			print("Sorry, that's not a number. Please enter the numerical digit.")
	return num

def getCategories(num):
	allCats = []
	chosenCats = []
	f = open("categories.txt", "r")
	rawData = f.read()
	f.close()
	allCats = rawData.split("\n")
	for i in range(num):
		chosenCats += [ allCats[random.randrange(len(allCats))]  ]
	return chosenCats


def getLetter():
	alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
	return alphabet[random.randrange(26)]


#game starts here
print("Welcome to Scattegories!")
print("Please enter the number of players")
numPlayers = getNum()
print("Please enter the number of categories to play. The default is 12.")
numCategories = getNum()
print("Please enter the number of seconds for the timer. The default is 180")
timer = getNum()
print("Generating " + str(numCategories) + "random categories and a random letter.")
categoryList = getCategories(numCategories)
letter = getLetter()
answers = []
print("All players ready their pencils and paper.")
print("The categories will be displayed, and you will each have " + str(timer) + "seconds to write a word beginning with the letter and matching the category.")
print("Are you ready?")
time.sleep(5)
print("Begin!")
print("The letter is " + letter)
print("And the categories are : ")
for i in range(len(categoryList)):
	print (str(i + 1) + ". " + categoryList[i] )
time.sleep(timer)
print ("\n" * 100) #clear the screen effectively 
print("Times up! Now discuss your answers and award points.")


