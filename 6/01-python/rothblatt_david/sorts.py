## DAVID ROTHBLATT
## 9/21/15
## SOFT DEV
## ZAMANSKY

import random
    
def insertion(L):
    i = 1
    while i < len(L):
        val = L[i]
        j = i
        while j > 0 and val < L[j-1]:
            L[j]  = L[j-1]
            j-=1
        L[j] = val
        i+=1

def selection(L):
    for i in range(len(L)-1):
        minPos = i
        for j in range(i+1, len(L)):
            if L[j] < L[minPos]:
                minPos = j
        tmp = L[i]
        L[i] = L[minPos]
        L[minPos] = tmp
                
def bubble(L):
    for i in range(len(L)):
        for j in range(len(L)-1):
            if L[j] > L[j+1] :
                tmp = L[j]
                L[j] = L[j+1]
                L[j+1] = tmp
                  
            
L = []
for num in range(0,15):
    L.append(random.randrange(100))

print "this is our random list"
print L

insertionL = L[:]
selectionL = L[:]
bubbleL = L[:]


insertion(insertionL)
print "\nthis is insertion sorted: "
print insertionL


selection(selectionL)
print "\nthis is selection sorted: "
print selectionL


bubble(bubbleL)
print "\nthis is bubble sorted: "
print bubbleL



