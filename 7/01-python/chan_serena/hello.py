#MergeSort!!!

def mergesort(x):
    j=0
    k=0
    result = []
    if len(x)<2:
        return x
    middle = int(len(x)/2)
    list1 = mergesort(x[:mid])
    list2 = mergesort(x[mid:])
    while j<len(list1) and k<len(list2):
        if list1[j] > list2[k]:
            result.append(list2[k])
            k+=1
        else:
            result.append(list1[j])
            j+=1
    result += list1[j:]
    result += list2[k:]
    return result

print mergesort([1,8,5,9,4,8,55,3,2])

        
