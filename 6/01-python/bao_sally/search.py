l = [1, 2, 5, 13, 2, 27, 100, 34, 44, 6, 34];

def bsearch(item):
    list.sort(l)
    low = 0
    high = len(l) - 1;
    while (low <= high):
        mid = (low + high) / 2
        if (l[mid] == item):
            return l[mid]
        elif (l[mid] < item):
            low = mid + 1
        else:
            high = mid - 1



print bsearch(30)
print bsearch(177)
print bsearch(1)
print bsearch(34)
