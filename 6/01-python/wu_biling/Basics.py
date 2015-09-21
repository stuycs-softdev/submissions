#refreshing the basics with some codingBat questions
#still need to work on string stuffs.

def date_fashion(you, date):
    if you<=2 or date <=2:
        return 0
    elif you >= 8 or date >= 8:
        return 2
    else:
        return 1


def alarm_clock(day, vacation):
    if vacation==False and day >=1 and day <= 5:
        return "7:00"
    elif (vacation==False and (day==0 or day==6)) or (vacation==True and day >=1 and day <= 5):
        return "10:00"
    else:
        return "off"

def make_bricks(small, big, goal):
    if small + big*5 <goal: 
        return False
    elif goal % 5 > small: 
        return False 
    else: 
        return True
