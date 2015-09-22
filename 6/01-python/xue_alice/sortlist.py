def ssort(l):
   size = len(l)
   for i in range(0,size-1):
      pos = i
      smallest = l[i]
      for j in range(i+1,size):
         if l[j]<smallest:
            smallest = l[j]
            pos = j
      r1 = l[i]
      r2 = smallest
      l[pos] = r1
      l[i] = r2
   return l

def bsort(l):
   size = len(l)
   for i in range(0,size-1):
      for j in range(0,size-1):
         if l[j]>l[j+1]:
            r1 = l[j]
            r2 = l[j+1]
            l[j] = r2
            l[j+1] = r1
   return l
