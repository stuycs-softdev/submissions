from random import randint

def authenticate(username,password):
    if username == "stuyvesant" and password =="123456789":
        return True
    else:
        return False

def ranColor():
    color = ""
    if randint(0,1) == 0:
        color = "#3399FF"
    else:
        color = "red"
    return color 
