#David Song

def sleep_in(weekday, vacation):
    return (not weekday) or vacation

def monkey_trouble(a_smile, b_smile):
    return a_smile == b_smile

def sum_double(a, b):
    if a == b:
        return 2 * (a + b)
    return a + b

def diff21(n):
  if n > 21:
    return 2 * (n - 21)
  return 21 - n

def parrot_trouble(talking, hour):
  if hour < 7 or hour > 20:
    return talking
  return False

def hello_name(name):
  return 'Hello ' + name + '!'
