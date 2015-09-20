
def make_tags(tag, word):
  output = "<" + tag + ">" + word + "</" + tag + ">"
  return output

def cigar_party(cigars, is_weekend):
  if is_weekend == True:
    if cigars>=40:
     return True
    else:
     return False
  else:
   if cigars>=40 and cigars<= 60:
    return True
   else:
    return False

def sum2(nums):
 if len(nums) == 0:
  return 0
 elif len(nums) == 1:
  return nums[0]
 else:
  return nums[0] + nums[1]

print make_tags('i', 'Yay')
print cigar_party(50, False)
print sum2([1, 2, 3])
  
