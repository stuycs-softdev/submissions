import random

test = []

for i in range(10):
	test.append(random.randint(0,10))

print(test)

def insertionsort (array):
	for x in range(len(array)):
		lowestInd = x
		for y in range(x, len(array)):
			if array[y] < array[lowestInd]:
				lowestInd = y
		temp = array[x]
		array[x] = array[lowestInd]
		array[lowestInd] = temp
	return array

print(insertionsort(test))