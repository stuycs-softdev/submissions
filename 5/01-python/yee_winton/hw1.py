#Prints a String, str, n number of times
def string_times(str, n):
  a = n
  b = ""
  while a != 0:
    b += str
    a -= 1
  return b

#Returns the front (first 3 characters) of a string n times.
def front_times(str, n):
  if len(str) == 0:
    a = ""
  elif len(str) == 1:
    a = str[0]
  elif len(str) == 2:
    a = str[0] + str[1]
  else:
    a = str[0] + str[1] + str[2]
  b = n
  c = ""
  while b != 0:
    c += a
    b -= 1
  return c

#Prints the number of times the substring of the last two characters appears
#in the String.
def last2(str):
  l = len(str)
  if l < 4:
    return 0
  else: 
    last = str[l-2] + str[l-1]
    a = 0
    b = 1
    ret = 0
    while b != (len(str) - 1):
      current = str[a] + str[b]
      if current == last:
        ret += 1
      a += 1
      b += 1
    return ret

print string_times("Hello",4)
print front_times("Hello",5)
print last2("hixhixxhi")
