#################################
#                               #
#          Sarah Joseph         #
#          Period 5             #
#                               #
#################################



def sumSquareDif(n):

    sumSq = 0
    sqSum = 0
    for i in range(1,n+1):
        sumSq += i**2
        sqSum += i

    sqSum **= 2

    return sqSum - sumSq


print sumSquareDif(10)
print sumSquareDif(100)

'''
def getReverse(n):
    return int(str(n)[::-1])

def checkOdd(n):
    if (n%10 == 0):
        return False
    else:
        while (n>0):
            if (n%2==0):
                return False
            n = n/10
    return True

def findRevNums(limit):
    sum = 0;
    for i in range(limit):
        if (checkOdd(i+getReverse(i))):
            sum +=1
            #print i+getReverse(i)
    return sum
'''

def getDivisors(n):
    div = range(1, n+1)
    index = 0;
    while index < len(div):
        x=div[index]
        if (n%x != 0):
            div.remove(x)
        else:
            index +=1
        #print div
    return div

print getDivisors(24)
print getDivisors(15)
print getDivisors(486)
print getDivisors(1800)
