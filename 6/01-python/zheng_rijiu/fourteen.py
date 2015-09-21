lengths = {}

def collatzLength(x):
    return collatzHelper(x,0)
    
def collatzHelper(x,length):
    if x in lengths:
        return 1 + lengths[x] + length
    elif x == 1:
        return length+1
    elif x%2 == 0:
        return collatzHelper(x/2,length+1)
    else:
        return collatzHelper(3*x+1,length+1)

def longestCollatz(x):
    largest = 0
    length = 0
    for n in range(1,x+1):
        currlen = collatzLength(n)
        if n not in lengths:
            lengths[n] = currlen
            if(currlen > length):
                largest = n
                length = currlen
    return largest

print longestCollatz(999999)
