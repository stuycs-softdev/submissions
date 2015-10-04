def authenticate(uname, pword):
    #if uname != "Leon":
    #    return False
    if uname == "":
        return False
    elif pword != "pass":
        return False
    else:
        return True
    
