print("The glass")
def iswhat(a, b):
    if (a > b):
        return "is half full"
    elif (a < b):
        return "is half empty"
    else:
        return "is full of...what is that?"

print(iswhat(3,3))