def array123(nums):
  i = 2
  while i < len(nums):
    if nums[i]==3 and nums[i-1]==2 and nums[i-2]==1:
      return True
    i+=1
  return False
  
def array_front9(nums):
  i = 0
  while i<len(nums) and i < 4:
    if nums[i] == 9:
      return True
    i+=1
  return False

def array_count9(nums):
  i = 0
  occur = 0
  while i < len(nums):
    if nums[i]==9:
      occur = occur +1
    i += 1
  return occur

def string_splosion(str):
  return string_splosion2(str, 1);
  
def string_splosion2(str, int):
  if len(str) <= int:
    return str
  return str[0:int]+string_splosion2(str, int+1)

#Codingbat python warmup 2 problems

#Tried BubbleSort
import random
def bubblesort(iarr):
  notDone = True
  aNum = 0
  while notDone:
    notDone = False
    i=0
    while i+1<len(iarr):
        if iarr[i]>iarr[i+1]:
            aNum = iarr[i]
            iarr[i]=iarr[i+1]
            iarr[i+1] = aNum
            notDone = True
            i+=1
            print(iarr)
  return iarr

integer = 0
array1 = []
while integer < 5:
	array1.append(random.randint(0,99))
	integer+=1
print(bubblesort(array1))