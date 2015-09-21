
# Given 2 int values, return True if one is negative and one is positive. Except if the parameter "negative" is True, then return True only if both are negative. 

def pos_neg(a, b, negative):
  if negative:
    return a<0 and b<0
  else:
    return a*b<0


# Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. 

def not_string(str):
    if str[0:3]=="not":
        return str
    else:
        return "not "+string

# Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..len(str)-1 inclusive). 

def missing_char(str,n):
    return str[0:n]+str[n+1:len(str)]


# Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more. 

def make_ends(nums):
    ret = []
    ret.append(nums[0])
    ret.append(nums[len(nums)-1])
    return ret

# Given an array of ints, return True if 6 appears as either the first or last element in the array. The array will be length 1 or more. 

def first_last6(nums):
  return nums[0]==6 or nums[len(nums)-1]==6

# Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count. 


def lucky_sum(a,b,c):
    if a==13:
        return 0
    elif b==13:
        return a
    elif c==13:
        return a+b
    else:
        return a+b+c
