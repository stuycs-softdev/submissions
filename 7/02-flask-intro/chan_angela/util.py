def check(password):
    if "cat" in password:
        return 1
    elif "dog" in password:
        return 2
    else:
        return 0

def logins(username, password):
    if username=="Vldmr" and password=="Unicorn468":
        return 1
    elif username=="DBarb" and password=="Gr8M8":
        return 2
    else:
        return 0
