def bubbleSort(numbers):
    for num in range(len(numbers)-1,0,-1):
        for i in range(num):
            if numbers[i]>numbers[i+1]:
                temp = numbers[i]
                numbers[i] = numbers[i+1]
                numbers[i+1] = temp


numList = [11,2,4,17,0,3,90,4]
bubbleSort(numList)
print numList
