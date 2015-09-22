#input two strings (a,b) returns abba as one string
def make_abba(a, b):
  return a+b*2+a

print make_abba('Hi','Bye')
print make_abba('Yo','Alice')

#input one string returns string with every character doubled
def double_char(str):
   final=''
   for x in range(len(str)):
     final=final+2*str[x]
   return final

print double_char('The')
print double_char('AAbb')

#input string and returns number of times hi appears
def count_hi(str):
  count=0
  for x in range(len(str)):
    if str[x:x+2]=='hi':
       count+=1
  return count
    
print count_hi('abc hhi ho')
print count_hi('ABChihihih')

#input a array of ints returns true if 6 is first or last element 
def first_last6(nums):
  if nums[0]==6 or nums[len(nums)-1]==6:
    return True
  else:
    return False

print first_last6([1,2,6])
print first_last6([6,1242,236,6])
print first_last6([124,15,15,1672,21])

# input # of cigars and TF value indicting if weekend. If it is not weekend
# and if cigars is between 40-60 inclusive return true. If it is weekend there
# is no upper bound. Else false
def cigar_party(cigars, is_weekend):
  if is_weekend==True:
    if cigars>=40:
      return True
  else:
    if cigars>=40 and cigars<=60:
      return True
  return False

print cigar_party(30,False)
print cigar_party(43,False)
print cigar_party(39,True)
print cigar_party(151,True)

# input a list and return number of elements in list that is even
def count_evens(nums):
  count=0
  for x in range(len(nums)):
    if nums[x]%2==0:
      count+=1
  return count

print count_evens([2,1,2,3,4])
print count_evens([2,2,0])
print count_evens([1,3,5])

