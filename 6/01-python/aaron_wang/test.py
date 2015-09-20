import random

def abc(n):
    return n

def fib(n):
    a = 1
    b = 1
    c = 2
    output = []
    while n > 0:
        output += [a]
        a = b
        b = c
        c = a + b
        n -= 1
    return output

def sumList(n):
    output = 0
    i = 0
    while i < len(n):
        output += n[i]
        i += 1
    return output

def generate(n):
    output = []
    while n > 0:
        output += [random.randint(0,10)]
        n -= 1
    return output;

    

print abc("abc")
print abc("defg")

print fib(15)

listA = generate(10)
print listA
print sumList(listA)
