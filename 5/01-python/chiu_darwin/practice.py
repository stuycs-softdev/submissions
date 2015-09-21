def compute():
    ans = 0
    for x in range(1000):
        if (x % 3 == 0 or x % 5 == 0):
            ans += x
    return str(ans)

print ("sum of multiples of 3 and 5 is: " + compute())

    
