import csv
import random
def readpokedeck():
    f = open("pokemon.csv","r")
    s = f.read()[:-1]
    f.close()
    profiles = []
    people = s.split("\n")
    a = ""
    for person in people:
        person = person.split(",")
        profile = {}
        profile["id"] = person[0]
        profile["first"] = person[1]
        profile["last"] = person[2]
        profile["email"] = person[3]
        profile["country"] = person[4]
        profile["ip"] = person[5]
        profiles.append(profile)
    return profiles

def randompokemon():
    pokedeck = readpokedeck()
    pokedeckNum = random.randint(0,99)
    return pokedeck[pokedeckNum]

def searchprofile(idnum):
            print  profiles[idnum]
            return {
        "id": "",
        "first": "Does Not Exist",
        "last": "",
        "email": "",
        "country": "",
        "ip": ""}

