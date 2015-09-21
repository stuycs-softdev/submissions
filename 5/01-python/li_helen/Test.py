#some coding bat problems

def count_evens(lst):
    ans = 0
    for i in range(len(lst)):
        if(lst[i]%2 == 0):
            ans=ans+1
    return ans


print("supposed to return 3:")
print(count_evens([1,2,3,4,5,6]))
print("\nsupposed to return 0:")
print(count_evens([1,3,5,]))


def centered_average(lst):
	smallest = 0
	largest = 1
	lengthy = len(lst)-2
	summ = 0
	for i in range(len(lst)):
		if(lst[smallest] > lst[i]):
			smallest = i
		elif(lst[largest] < lst[i]):
			largest = i
	for i in range(len(lst)):
		if(i != smallest and i != largest):
			summ += lst[i]
	return summ/lengthy
	

print("\nsupposed to return 3:")
print(centered_average([1, 2, 3, 4, 100]))
print("\nsupposed to return 5:")
print(centered_average([1, 1, 5, 5, 10, 8, 7]))
print("\nsupposed to return -3:")
print(centered_average([-10, -4, -2, -4, -2, 0]))
  