import csv
import random

def readProfiles():
    data={}
    file = open("data.csv")
    d = csv.reader(file);
    i = 0
    for line in d:
        l = line
        Dic={}
        Dic['first_name']=l[0]
        Dic['last_name']=l[1]
        Dic['id']=l[2]
        Dic['country']=l[3]
        if Dic['first_name']!="first_name":
            data[i]=Dic
            i+=1
            
    return data

def getProfile():
    profiles = readProfiles()
    i = random.randint(0,99)
    return profiles[i]


def searchProfile(name):
    profiles = readProfiles()
    if " " in name:
        name = name.lower().split(" ")
        for p in profiles:
            person = profiles[p]
            if person['first_name'].lower()==name[0] and person['last_name'].lower()==name[1]:
                return person
    else:
        name = name.lower()
        for p in profiles:
            person = profiles[p]
            if person['first_name'].lower()==name or person['last_name'].lower()==name or person['country'].lower()==name or person['id']==name:
                return person



