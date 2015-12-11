usernames = {}

def authenticate(username, password):
    if usernames.get(username, "-1") == password:
        return True
    else:
        return False

def add (username, password):
    if len(password) < 4:
        return False
    else:
        usernames[username] = password
        return True