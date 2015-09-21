#Random Character-Find Function for Strings
def SFind(string,letter):
    for i in range (len(string)):
        if string[i] == letter:
            return i
    return -1

print SFind('hello friend', 'd')

def Longest(l):
    length=0
    pos=0
    if len(l) > 0:
        for i in range(len(l)):
            if len(l[i]) > length:
                length = len(l[i])
                pos = i
        return l[pos]
    else:
        return "''"

#print Longest(['fred','harry','joe']) 
#returns harry, longest string in the array
