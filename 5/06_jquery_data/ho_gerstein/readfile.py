import csv
import random
def readprofiles():
    f = open("MOCK_DATA.csv","r")
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

def randomprofile():
    profiles = readprofiles()
    profileNum = random.randint(0,99)
    return profiles[profileNum]

def searchprofile(name):
    i = 1
    fixedName=""
    while (i < len(name)):
        if name[i].isupper():
            fixedName = name[:i] + " " + name[i:]
        i+=1
    name = fixedName.split(" ")
    profiles = readprofiles()
    for person in profiles:
        if person["first"]==name[0] and person["last"]==name[1]:
            return person
    return {
        "id": "",
        "first": "Does Not Exist",
        "last": "",
        "email": "",
        "country": "",
        "ip": ""}

