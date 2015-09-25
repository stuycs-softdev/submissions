def sleep_in(weekday, vacation):
  
    return (weekday == False or vacation == True)

print sleep_in(False, False) #True
print sleep_in(True, False) #False

def diff21(n):
  
  ans = 21 - n
  
  if n > 21:
    return (ans * -2)
  else:
    return ans

print diff21(19) #2
print diff21(30) #18
print diff21(21) #0

def not_string(str):
  
  if str[:3] == 'not':
    return str
  else:
    return ('not ' + str)

print not_string('candy')  #'not candy'
print not_string('not bad')  #'not bad'
print not_string('not') #'not'
