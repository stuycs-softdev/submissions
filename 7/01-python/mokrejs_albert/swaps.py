def swap(A,b,c):
    d = A[b:b+1]
    A[b:b+1] = A[c:c+1]
    A[c:c+1] = d

def sort(A):
    x = 0
    while x < len(A)-1:
        if A[x:x+1] > A[x+1:x+2]:
            swap(A,x,x+1)
            x = 0
        else:
            x = x+1
    string = "["
    for y in A:
        string = string + " " + str(y) + ","
    print string + "]"
    
sort([1,4,5,3,9,0])

