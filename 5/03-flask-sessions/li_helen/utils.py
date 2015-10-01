def authenticate(uname,pword):
    login={"abc":"123",
           "helen":"li",
           "soft":"dev"
           }
    if uname in login:
        if login[uname]==pword:
            return True
    else:
        return False
