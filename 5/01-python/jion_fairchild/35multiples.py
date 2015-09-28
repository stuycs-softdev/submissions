def solve(x):
    ans = 0
    for y in range(1,x):
        if y%3 == 0 or y%5 == 0:
            ans+=y
    return ans
print solve(10);
        
