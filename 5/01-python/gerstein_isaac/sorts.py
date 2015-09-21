def insertion(L):
    i = 1
    while i < len(L):
        current = L[i]
        j = i - 1
        while j > -1 and L[j] > current:
            L[j + 1] = L[j]
            j -= 1
        L[j + 1] = current
        i += 1

def selection(L):
    i = 0
    while i < len(L):
        lowest = L[i]
        index = i
        j = i
        while j < len(L):
            if L[j] < lowest:
                lowest = L[j]
                index = j
            j += 1
        L[index] = L[i]
        L[i] = lowest
        i += 1

def bubble(L):
    sorted = False
    i = 0
    while i < len(L) and not sorted:
        sorted = True
        j = 0
        while j < len(L) - i - 1:
            if L[j] > L[j + 1]:
                a = L[j]
                L[j] = L[j + 1]
                L[j + 1] = a
                sorted = False
            j += 1
        i += 1
