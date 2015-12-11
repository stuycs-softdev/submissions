import csv
import random

def readpokedeck():
    fd = open("pokemon.csv","r")
    s = fd.read()[:-1]
    fd.close()
    pokedeck = []
    people = s.split("\n")
    a = ""
    for pokemon in pokedeck:
        pokemon = pokemon.split(",")
        newpokemon = {}
        pokedeck["id"] = pokemon[0]
        pokedeck["name"] = pokemon[1]
        pokedeck["attack"] = pokemon[2]
        pokedeck["defense"] = pokemon[3]
        pokedeck["speed"] = pokemon[4]
        pokedeck["spAtk"] = pokemon[5]
        pokedeck["spDef"] = pokemon[6]
        pokedeck["hp"] = pokemon[7]
        pokedeck["lv"] = pokemon[8]
        pokedeck.append(newpokemon)
    return pokedeck

def randompokemon():
    pokedeck = readpokedeck()
    pokedeckNum = random.randint(2,5)
    print pokedeckNum
    return pokedeck[pokedeckNum]

def searchpokedeck(name):
	count = 1
	tempName = ""
	while (count < len(name)):
		if name[count].isupper():
			tempName = name[:count] + " " + name[:count]
		count =+ 1
	name = tempName.split(" ")
	pokedeck = readpokedecks()
	for pokemon in pokedeck:
	    if pokemon["name"]==name[0]:
		    return pokemon
	return {
	    "id": "",
		"name": "DNE",
        "attack": "",
        "defense": "",
        "speed": "",
        "spAtk": "",
        "spDef": "",
		"hp": "",
		"lv": ""
	}