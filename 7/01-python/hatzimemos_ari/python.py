print "hi"

def sum(a,b):
    return a+b

def factors(a,b):
    if (a == b):
        return True
    elif (a > b):
        c = b
        while (c < a):
            c = c+b
        if (c == a):
            return True
        else:
            return False
    elif (b > a):
        c = a
        while (c < b):
            c = c+a
        if (c == b):
            return True
        else:
            return False

print sum(1,2)
print factors(2,5)
print factors(2,10)
print factors(2,2)
