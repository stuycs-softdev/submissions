#Sum of all even fibonacci numbers less than 4 million

def evenFib(maxNum):
    fibs = [1, 2]
    currentFib = 0
    index = 0
    total = 0
    while currentFib <= maxNum:
        currentFib = fibs[index] + fibs[index+1]
        fibs.append(currentFib)
        index += 1

    for i in range(len(fibs)):
        if (fibs[i] % 2 == 0):
            total += fibs[i]
            
    return total

print evenFib(4000000)
    
