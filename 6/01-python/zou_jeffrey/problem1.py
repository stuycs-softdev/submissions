def multiples3And5(number):
    sum = 0;
    for i in range(number):
        if (i % 3 == 0 or i % 5 == 0):
            sum += i
    return sum

print multiples3And5(1000)
