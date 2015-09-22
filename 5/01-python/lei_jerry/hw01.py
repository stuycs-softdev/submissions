#pe 1
def pb1(inny):
    d = inny
    c = 0
    tt = 0
    while c < d: 
        if c % 5 == 0:
            tt += c
        elif c % 3 == 0:
            tt += c
        c+= 1;
    return tt        
print("#1. " + str(pb1(1000)))
#pe 2
def pb2(inny):
    d = inny
    c = 1
    c1 = 2
    temp = 0
    tt = 0
    while temp <= d:
        temp = c1
        if temp %2 == 0:
            tt += temp
        temp = c + c1
        c = c1
        c1 = temp
    return tt
print("#2. " + str(pb2(4000000)))
#pe 3
def pb3(inny):
    n = inny
    i = 2
    while i * i < n:
        while n % i == 0:
            n = n / i
        i = i + 1
    return n
print("#3. " + str(pb3(600851475143)))



    
