def primes(limit):
    a = [True] * limit
    a[0] = False
    a[1] = False
    i = 2
    while i < limit:
        if a[i]:
            j = 2*i
            while j < limit:
                a[j] = False
                j+=i
        i+=1
    return a

p = primes(1000)
for i in range (1000):
    if p[i]:
        print i
