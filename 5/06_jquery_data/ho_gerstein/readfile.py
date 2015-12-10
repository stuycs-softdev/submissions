import csv
import random
def readprofiles():
    f = open("MOCK_DATA.csv","r")
    profiles = []
    profile = {}
    person = f.readlines()
    while(person != None):
        person = person.split(",")
        profile["id"] = person[0]
        profile["first"] = person[1]
        profile["last"] = person[2]
        profile["email"] = person[3]
        profile["country"] = person[4]
        profile["ip"] = person[5]
        profiles.append(profile)
        person = f.readline()
    f.close()
    return profiles

def randomprofile():
    profiles = readprofiles()
    profileNum = random.randint(0,99)
    return profiles[profileNum]

readprofiles()
