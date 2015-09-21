# Project Euler problem #1
# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

def IsMultipleOf3Or5(number):
    if number%3 == 0 or number%5 == 0:
        return True

x = 0

i = 0

while i < 1000:
    if IsMultipleOf3Or5(i):
        x += i
    i+=1

print x
    

    


