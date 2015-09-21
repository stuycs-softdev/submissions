class sorts:

    def bubbleSort(myList):
        i=len(myList)-1
        while i>0:
            w=0
            while w<i:
                if myList[w] > myList[w+1]:
                    m = myList[w]
                    myList[w]=myList[w+1]
                    myList[w+1]=m
                w=w+1
            i=i-1

    testList=[9,1,0,3,6]
    print testList
    bubbleSort(testList)
    print testList
