#Kah Soon Yap
#HW01

def name():
    print ("Kah Soon Yap")

name()

def name(word):
    print(word)

name("stuff")
    
def fib(n):
    a=0
    b=1
    count=1
    holder=0
    while count<n:
        holder=a
        a=b
        b=holder+b
        count+=1
    return b

print ("\nFib")
print (fib(3))
print (fib(4))
print (fib(5))

def sumDigits(n):
    sumD=0
    while n>=10:
        sumD+=n%10
        n=n//10
    sumD+=n
    return sumD

print ("\nSum of the digits")
print (sumDigits(12))
print (sumDigits(123))
print (sumDigits(1234))
print (sumDigits(12345))
