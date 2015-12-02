def sum67(nums):
    wat=False
    c=0
    for i in nums:
        if i==6:
            wat=True
        elif i==7 and wat==True:
            wat=False
        elif wat==False:
            c+=i
    return c

def xyz_there(str):
    for i in range(len(str)-2):
        if (str[i]!='.' and str[i+1:i+4]=='xyz') or (str[:3]=='xyz'):
            return True
        return False

def cat_dog(x):
    cat=0
    dog=0
    for dogs in range(len(x)-2):
        if x[dogs] == 'd' and x[dogs+1] == 'o' and x[dogs+2] == 'g':
            dog+=1
    for cats in range(len(x)-2):
        if x[cats] == 'c' and x[cats+1] == 'a' and x[cats+2] == 't':
            cat+=1
    if dog==cat:
        return True
    return False
