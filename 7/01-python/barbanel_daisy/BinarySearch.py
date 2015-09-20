
import random

def bSearch(data, item):
    high = len(data)-1
    low = 0
    while(high >= low):
        mid = (high+low)/2
        midItem = data[mid]
        if(item < midItem):
            high = mid - 1
        elif(item > midItem):
            low = mid + 1
        elif (item == midItem):         
            return mid
    return -1


test = []
for i in range(70):
    test.append(i)

print test
print bSearch(test, 15)
print bSearch(test, 54)
print bSearch(test, 80)

test = []
for i in range(20):
    test.append(random.randint(1,50))

test.sort()
print test
print bSearch(test,5)

