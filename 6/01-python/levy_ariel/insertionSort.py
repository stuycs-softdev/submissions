# Insertion Sort

def insertionSort( nums ):
    numsLen = len(nums)
    for i in range(numsLen):
        pos = i  # holds index of value as it is put in order
        cur = nums[i]  
        while pos > 0 and nums[pos-1] > cur:  # shift next value down
            nums[pos] = nums[pos-1]
            pos -= 1
        nums[pos] = cur  # move value into place
        #print nums

numTup = input("Enter the numbers to be sorted: ")
numList = list(numTup)
insertionSort(numList)
print numList
