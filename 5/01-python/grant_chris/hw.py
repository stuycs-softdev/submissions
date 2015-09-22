def multiples():
    sum = 0
    i = 3
    while (i < 1000):
       sum += i
       i *= 3
    i = 5
    while (i < 1000):
        sum += i
        i *= 5
    return sum

print(multiples())

def fibonacci():
    last = 1
    sum = 0
    i = 1
    while(i < 4000000):
        last = i
        if (i%2 == 0):
            sum += i
        i += last
    return sum

print(fibonacci())
