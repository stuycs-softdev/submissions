# Selection sort

# List that needs to be sorted

list = [3,4,5,8,7,1,0,2,6]

# Selection sort
def selection():
    result = list
    print result
    pos = 0
    while pos < len(result):
        temp = result[pos]
        i = pos + 1
        while i < len(result):
            if result[i] < temp:
                temp = result[i]
                index = i
            i = i + 1
        result[index] = result[pos]
        result[pos] = temp
        pos = pos + 1
        print result
    print result
selection()

