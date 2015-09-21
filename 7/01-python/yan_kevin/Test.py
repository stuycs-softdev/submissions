def fib(num):
    #prints out the nth fib number
    if num == 0:
        return 0
    elif num == 1:
        return 1
    else:
        return fib(num-1) + fib(num-2)

print fib(3)
#Should print 2
print fib(7)
#Should print 13
