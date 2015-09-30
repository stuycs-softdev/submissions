import hashlib

def verify(username, password):
    credentials = list(open("known_users"))
    for user in credentials:
        _user = user.strip().split("|||")
        if _user[0] == username and _user[1] == password_hash(password):
            return True
    return False

def username_hash(username):
    # Hash alg: ascii repr of the username... xored with a magic number :)
    namehash = ""
    for c in username:
        namehash += str(ord(c) ^ 0xC0FFEE) + "_"
    return namehash[:-1]

def password_hash(password):
    # Hash alg:
    m = hashlib.md5()
    m.update(password)
    hashpass = m.hexdigest()
    return hashpass

def username_dehash(username):
    chars = username.split("_")
    unhashed = ""
    for item in chars:
        unhashed += chr(int(item) ^ 0xC0FFEE)
    return unhashed

if __name__ == "__main__":
    if str(raw_input("Add user? ")) == "YES":
        username = str(raw_input("New username: "))
        password = str(raw_input("New password: "))
        f = open("known_users", 'a')
        f.write(username + "|||" + password_hash(password) + "\n")
        f.close()

# TO REMOVE DUPLICATE INSTANCES OF USERS
# RUN THE FOLLOWING SHELL COMMANDS
# sort -u known_users | while read line; do echo $line >> known_users_2; done
# mv known_users_2 known_users
