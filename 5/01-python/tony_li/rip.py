

def RIP(rips,pieces):
    if rips==pieces:
        print "IN PIECES"
    else:
        pieces+=1
        print "RIP"
        RIP(rips,pieces)
   


RIP(5,0)
