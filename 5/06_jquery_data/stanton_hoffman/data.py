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
        pokedeck = {}
        pokedeck["name"] = pokemon[0]
        pokedeck["attack"] = pokemon[1]
        pokedeck["defense"] = pokemon[2]
        pokedeck["speed"] = pokemon[3]
        pokedeck["spAtk"] = pokemon[4]
        pokedeck["spDef"] = pokemon[5]
		pokedeck["hp"] = pokemon[6]
		pokedeck["lv"] = pokemon[7]
        pokedecks.append(pokedeck)
    return pokedeck

def randompokemon():
    pokedecks = readpokedeck()
    pokedeckNum = random.randint(0,99)
    return pokedeck[pokedeckNum]

def searchpokedeck(name):
    name = name.split()
    pokedeck = readpokedecks()
    for pokemon in pokedeck:
        if pokemon["first"]==name[0] and pokemon["last"]==name[1]:
            return pokemon
    return {
        "id": None,
        "first": None,
        "last": None,
        "email": None,
        "counttry": None,
        "ip": None}