def sum_primes(x):
    primes=range(3,x,2)
    primes.insert(0,2)
    ans=0
    x=1
    while (x<len(primes)):
        y=primes[x]
        index=x+1
        while (index<len(primes)):
            if (primes[index]%y==0):
                primes.pop(index)
            else:
                index+=1
        x+=1
    while (len(primes)>0):
        ans+=primes.pop()
    return ans

print(sum_primes(2000000))
