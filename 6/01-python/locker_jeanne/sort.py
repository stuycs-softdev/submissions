def sort(i):
    size = len(i)
    j = 0
    k = 0
    while j < size - 1:
        while k < size - 1:
            if i[k]>i[k+1]:
                r1 = i[k]
                r2 = i[k+1]
                i[k] = r2
                i[k+1] = r1
            k = k + 1
        j = j + 1
    return i


print sort([99, 2, 64, 1, 4, 3, 67])
