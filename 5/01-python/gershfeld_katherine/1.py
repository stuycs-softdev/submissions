
def mergeSort(L):
    if len(L)<=1:
        return L
    half = len(L)/2
    La = L[:half]
    Lb = L[half:]
    #print(La)
    #print(Lb)
    La = mergeSort(La)
    Lb = mergeSort(Lb)
    return merge(La,Lb)

def merge(La, Lb):
    #print(La)
    #print(Lb)
    L = La + Lb
    i = 0
    ia = 0
    ib = 0
    while ia<len(La) and ib<len(Lb):
        if La[ia]<Lb[ib]:
            L[i] = La[ia]
            ia+=1
        else:
            L[i] = Lb[ib]
            ib+=1
        i+=1
    while (ia<len(La)):
        L[i] = La[ia]
        ia+=1
        i+=1
    while (ib<len(Lb)):
        L[i] = Lb[ib]
        ib+=1
        i+=1
    return L

L1 = [3,1,2,0]
print(L1)
print(mergeSort(L1))

L2 = [9,8,7,6,5,4,3,2,1,0,19,18,17,16,15,14,13,12,11,10]
print(L2)
print(mergeSort(L2))

L3 = [9,8,7,6,5,4,3,2,1,0,19]
print(L3)
print(mergeSort(L3))

