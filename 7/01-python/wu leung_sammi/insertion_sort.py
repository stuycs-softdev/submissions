import random

#make a random list of 10 from 0 to 20
def makeList():
    global l
    for y in range(0,9):
        l += [random.randint(0,20)]


def insertionSort():
    global l
    for index in range(1,len(l)): #start from the second number
        #keep a temp for the current place
        temp = l[index]
        #keep switching places until the temp is no longer smaller than the previous
        while (index > 0 and (temp < l[index -1])):
            l[index] = l[index - 1];
            index -= 1
        #set final place of temp
        l[index] = temp;
        
    
l = []
makeList()
print "random list: " + str(l)
insertionSort()
print "sorted list: " + str(l)
