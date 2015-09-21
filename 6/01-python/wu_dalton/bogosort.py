import random
import time

items = raw_input("Type in some numbers separated by spaces: ")
nums = items.split()

tries = 0
start = time.clock()

while(not(all(nums[i] <= nums[i+1] for i in range(len(nums)-1)))):
	tries += 1
	random.shuffle(nums)

end = time.clock()

print("Sorted list: " + str(nums))
print("Completed in " + str(tries) + " tries and " + str(end - start) + " seconds.")
