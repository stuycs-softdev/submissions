#find the sum of all multiples of 3 or 5 below 1000.
import sys;

def threefivesum():
    multiple = 3
    counter = 0
    while multiple < 1000:
        counter += multiple
        multiple += 3
    multiple = 5
    while multiple < 1000:
        counter += multiple
        multiple += 5
    multiple = 15
    while multiple < 1000:
        counter -= multiple
        multiple += 15
    return counter

def evenfibsum():
    fib1 = 1
    fib2 = 2
    counter = 0
    answer = 0
    limit = 4000000
    #even fib numbers come every 3 in the sequence 2 - 0   3 - 1  5 - 2   8 - 3
    while fib1 < limit & fib2 < limit:
        if counter % 3 == 0 :
            if fib1 > fib2:
                answer += fib1
            else:
                answer += fib2        
        if fib1 < fib2:
            fib1 += fib2
        else:
            fib2 += fib1
        counter += 1
    return answer

    
print "Two Project Euler Problems"
print "Sum of all multiples of 3 and 5 below 1000"
print threefivesum();
print "Sum of even Fibonacci numbers below 4 million"
print evenfibsum() + "  coudn't get this one to work";

        
