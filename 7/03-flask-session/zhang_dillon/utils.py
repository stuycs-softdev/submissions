def authenticate(username, password):
    users = {"dillonzhang":"password"}
    return username in users and users[username] == password
