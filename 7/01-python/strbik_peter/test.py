def insertionSort(L):
    for i in range(1, len(L)):

        curr = L[i]
        pos = i

        while pos > 0 and L[pos - 1] > curr:
            L[pos] = L[pos - 1]
            pos -= 1

        L[pos] = curr


randomlist = [66,24,97,1,71,20,43,58,99,32]
insertionSort(randomlist)
print(randomlist)


            
