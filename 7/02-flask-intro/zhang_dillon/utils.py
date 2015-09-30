users = {"dillonzhang":"password"}

def authenticate(username, password):
    return users[username] == password
