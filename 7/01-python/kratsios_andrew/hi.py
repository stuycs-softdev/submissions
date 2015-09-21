print "hi"

def ifFactor(x,y):
    if (x == y):
        return True
    elif (x > y):
        z = y
        while (z < x):
            z = z+y
        if (z == x):
            return True
        else:
            return False
    elif (y > x):
        z = x
        while (z < y):
            z = z+x
        if (z == y):
            return True
        else:
            return False

def add(x,y):
    return x+y

print add(1,2)
print factors(2,5)
print factors(2,10)
print factors(2,2)
