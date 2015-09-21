def MergeSort(numList):

    if len(numList) == 1:
        return numList
    else:
        a = numList[:len(numList)/2]
        b = numList[len(numList)/2:]

    return merge(MergeSort(a), MergeSort(b))


def merge(a,b):

    ret = []
    while len(a) > 0 and len(b) > 0:
        if a[0] < b[0]:
            ret.append(a[0])
            a.remove(a[0])
        else:
            ret.append(b[0])
            b.remove(b[0])
    while len(a) > 0:
        ret.append(a[0])
        a.remove(a[0])
    while len(b) > 0:
        ret.append(b[0])
        b.remove(b[0])
    return ret

#~~~~~~~~~~~ Tests ~~~~~~~~~~~

num=[6,2,3,1]
num2=[0,1,0,1,10,3]

print ("\nHi, this is a mergesort! :)\n")
print ("Original: " + str(num))
print ("Sorted: " + str(MergeSort(num)))

print ("\nOriginal: " + str(num2))
print ("Sorted: " + str(MergeSort(num2)))
