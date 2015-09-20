def binarySearch(nums, target):
    high = len(nums) - 1;
    low = 0;
    while (high >= low):
        mid = (high + low)/2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            high = mid - 1
        else:
            low = mid + 1
    return -1

test = [1,2,3,4,5,6,7,8]
print test
print binarySearch(test,4)
print binarySearch(test,9)
print binarySearch(test,2)
print binarySearch(test,0)
            

