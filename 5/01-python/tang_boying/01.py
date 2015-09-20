def bubbleSort(list):
    for n in range(len(list)):
        for x in range(len(list) - 1):
            if list[x] > list[x + 1]:
                y = list[x]
                list[x] = list[x + 1]
                list[x + 1] = y
    print list

bubbleSort([3,2,1])
