import time
import random

game = False
rematch = False
lastc = []
lastp = []
compBoard = []
playerBoard = []
playerShips = []
compShips = []

def play():
    global compBoard
    global playerBoard
    global compShips
    global lastp
    global game
    compBoard = [" 0"," 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9"]
    playerBoard = [" 0"," 1"," 2"," 3"," 4"," 5"," 6"," 7"," 8"," 9"]
    i = 0
    c = 0
    while i < 100:
        if (i)%10 == 0 & i != 1:
            compBoard.append(" " + str(c))
            playerBoard.append(" " + str(c))
            c+=1
        compBoard.append(" .")
        playerBoard.append(" .")
        i+=1
    turn = 1
    game = True
    setup()
    compsetup()
    if not rematch:
        print("Now that you've postioned your boats, you'll begin combat. Each player takes turns attempting to shoot the other player's boats.")
        time.sleep(2)
        print("\nOn your turn, call out a position to fire on (x,y). A hit will be marked with a 'X', while a miss will be marked with a 'O'.")
        time.sleep(2)
        print("\nWhoever destroys all their opponents boats first wins.")
        time.sleep(2)
    while game:
        time.sleep(1)
        print("\n\n\nTURN " + str(turn)+"\n")
        print("COMPUTER BOARD\n----------------------")
        display(compBoard)
        print("\nPLAYER BOARD\n----------------------")
        display(playerBoard)
        valid = True
        shot = ""
        sp = 0
        while valid:
            shot = raw_input("\nWhere would you like to shoot? (x,y)")
            test = ["0","1","2","3","4","5","6","7","8","9"]
            if (shot[0] in test) & (shot[2] in test):
                sp = int(shot[0]) + 11 + (int(shot[2]) * 11)
                if ((abs(float(shot[0]) - 4.5) < 5.0) & (abs(float(shot[2]) - 4.5) < 5.0)) & ((compBoard[sp] == " =") | (compBoard[sp] == " .")):
                    valid = False
        if compBoard[sp] == " =":
            compBoard[sp] = " X"
            lastp = [sp]
            print("\nHit")
            if not shipstat(lastp,compShips,compBoard):
                print("\nShip sunk")
        else:
            compBoard[sp] = " O"
            print("\nMiss")
        time.sleep(1)
        if game:
            compmove()
        wincon()
        turn +=1
        
            
def display(board):
    a = 0
    t = "  "
    while a < len(board):
        if (a+1)%11 == 0:
            t += "\n"
        if (board == compBoard) & (board[a] == " ="):
            t += " ."
        else:
            t += board[a]
        a+=1
    print(t)
    

def setup():
    global playerBoard
    global playerShips
    place = ""
    err = False
    while (place != "y") & (place != "n"):
        place = raw_input("Welcome to Battleship\n\nWould you like to manually place your ships?(y/n)\n")
    time.sleep(1)
    print("Ok, let's get started.\n\n")
    while len(playerShips) != 5:
        if err:
            print("\nAn error occured, please input again")
        if place == "y":
            if not rematch:
                time.sleep(1)
                print("As a naval commander, you have access to a carrier (5 spaces), a battleship (4), a destroyer (3), a submarine(3), and a patrol boat (2).\n")
                time.sleep(1)
                print("Let's start by placing the cruiser.\n\n To place a ship, please name a coordinate (x,y). Then you will be prompted to name a direction (u/d/l/r)\n")
            scount = 0
            ships = ["carrier","battleship","destroyer","submarine","patrol boat"]
            valid = True
            while scount < 5:
                print("PLAYER BOARD\n----------------------")
                display(playerBoard)
                ca = "wak"
                cad = "fld"
                test = ["0","1","2","3","4","5","6","7","8","9"]
                test2 = ["u","d","l","r"]
                while ((ca[0] not in test) | (ca[2] not in test) | (cad not in test2)):
                    ca = raw_input("\nWhere would you like to place the " + ships[scount] + "? (x,y)\n")
                    cad = raw_input("What orientation would you like? (u/d/l/r)\n")
                if (abs(float(ca[0]) - 4.5) < 5.0) & (abs(float(ca[2]) - 4.5) < 5.0):
                    if cad == "u":
                        if pos(int(ca[0]),int(ca[2]),-11,scount,playerBoard,playerShips):
                            print("\n Invalid positioning")
                        else:
                            scount += 1
                    elif cad == "d":
                        if pos(int(ca[0]),int(ca[2]),11,scount,playerBoard,playerShips):
                            print("\n Invalid positioning")
                        else:
                            scount += 1
                    elif cad == "l":
                        if pos(int(ca[0]),int(ca[2]),-1,scount,playerBoard,playerShips):
                            print("\n Invalid positioning")
                        else:
                            scount += 1
                    elif cad == "r":
                        if pos(int(ca[0]),int(ca[2]),1,scount,playerBoard,playerShips):
                            print("\n Invalid positioning")
                        else:
                            scount += 1
                    else:
                        print("\n Invalid direction")
                else:
                    print("\n Invalid point")
        else:
            scount = 0
            while scount < 5:
                if random.randint(0,1) == 0:
                    if not pos(random.randint(0,9),random.randint(0,9),((random.randint(0,1) * 10) + 1),scount,playerBoard,playerShips):
                        scount +=1
                else:
                    if not pos(random.randint(0,9),random.randint(0,9),-1*((random.randint(0,1) * 10) + 1),scount,playerBoard,playerShips):
                        scount +=1
        err = True
        
def compsetup():
    global compBoard
    global compShips
    while len(compShips) !=5:
        scount = 0
        while scount < 5:
            if random.randint(0,1) == 0:
                if not pos(random.randint(0,9),random.randint(0,9),((random.randint(0,1) * 10) + 1),scount,compBoard,compShips):
                    scount +=1
            else:
                if not pos(random.randint(0,9),random.randint(0,9),-1*((random.randint(0,1) * 10) + 1),scount,compBoard,compShips):
                    scount +=1

def pos(x,y,d,sl,b,shiplis):
    global playerShips
    global compShips
    sLen = [5,4,3,3,2]
    u = []
    i = 0
    cp = 11 + (y*11) + x
    if abs(cp + (d * (sLen[sl] - 1)) - 65) <= 54:
        while i < sLen[sl]:
            if b[int(cp + (d * i))] != " .":
                #print(" yyyyyyyyyyyyyyyyyyyyyy"+b[11])
                return True
            i +=1
        i = 0
        while i < sLen[sl]:
            b[int(cp + (i * d))] = " ="
            u.append(cp + (i * d))
            i +=1
        shiplis.append(u)
    else:
        #print(" zzzzzzzzzzzzzzzz"+b[11])
        return True
    return False

def shipstat(currhits,currshiplist,bord):
    global playerBoard
    global playerShips
    global compShips
    global lastc
    ind = 0
    ind2 = 0
    popped = False
    if len(currhits) > 0:
        for i in currshiplist:
            if currhits[0] in i:
                for h in i:
                    if bord[h] == " =":
                        return True
                    else:
                        popped = True
                        ind2 = ind
            ind+=1
    if popped:
        currshiplist.pop(ind2)
        if bord == playerBoard:
            lastc = []
    return False
    
def compmove():
    global playerBoard
    global playerShips
    global lastc
    if shipstat(lastc,playerShips,playerBoard):
        if len(lastc) > 1:
            small = lastc[0]
            large = lastc[len(lastc) - 1]
            for k in lastc:
                if k > large:
                    large = k
                if k < small:
                    small = k
            targets = []
            if (large - small)%11 == 0:
                targets = [large + 11, small - 11]
            else:
                targets = [large + 1, small - 1]
            nothit = True
            while nothit:
                sp = targets[random.randint(0,1)]
                if (playerBoard[sp] == " =") | (playerBoard[sp] == " ."):
                    if playerBoard[sp] == " =":
                        playerBoard[sp] = " X"
                        lastc.append(sp)
                        print("\nYou've been hit: " + str(sp%11) + "," + str((sp-11)/11))
                        if not shipstat(lastc,playerShips,playerBoard):
                            print("\nShip sunk\n")
                    else:
                        playerBoard[sp] = " O"
                        print("\nYour opponent missed: " + str(sp%11) + "," + str((sp-11)/11))
                    nothit = False
        else:
            targets = [lastc[0] + 1, lastc[0] - 1, lastc[0] + 11, lastc[0] - 11]
            nothit = False
            for g in targets:
                if ((g < 120) & (g > 11)) & ((playerBoard[g] == " =") | (playerBoard[g] == " .")):
                    nothit = True
            if nothit == False:
                safe = True
                while safe:
                    sp = random.randint(0,9) + 11 + (random.randint(0,9) * 11)
                    if (playerBoard[sp] == " =") | (playerBoard[sp] == " ."):
                        if playerBoard[sp] == " =":
                            playerBoard[sp] = " X"
                            lastc.append(sp)
                            print("\nYou've been hit: " + str(sp%11) + "," + str((sp-11)/11))
                            if not shipstat(lastc,playerShips,playerBoard):
                                print("\nShip sunk\n")
                        else:
                            playerBoard[sp] = " O"
                            print("\nYour opponent missed: " + str(sp%11) + "," + str((sp-11)/11))
                        safe = False
            while nothit:
                sp = targets[random.randint(0,3)]
                if (playerBoard[sp] == " =") | (playerBoard[sp] == " ."):
                    if playerBoard[sp] == " =":
                        playerBoard[sp] = " X"
                        lastc.append(sp)
                        print("\nYou've been hit: " + str(sp%11) + "," + str((sp-11)/11))
                        if not shipstat(lastc,playerShips,playerBoard):
                            print("\nShip sunk\n")
                    else:
                        playerBoard[sp] = " O"
                        print("\nYour opponent missed: " + str(sp%11) + "," + str((sp-11)/11))
                    nothit = False
    else:
        safe = True
        while safe:
            sp = random.randint(0,9) + 11 + (random.randint(0,9) * 11)
            if (playerBoard[sp] == " =") | (playerBoard[sp] == " ."):
                if playerBoard[sp] == " =":
                    playerBoard[sp] = " X"
                    lastc.append(sp)
                    print("\nYou've been hit: " + str(sp%11) + "," + str((sp-11)/11))
                    if not shipstat(lastc,playerShips,playerBoard):
                            print("\nShip sunk\n")
                else:
                    playerBoard[sp] = " O"
                    print("\nYour opponent missed: " + str(sp%11) + "," + str((sp-11)/11))
                safe = False

def wincon():
    global compShips
    global playerShips
    global game
    if len(compShips) == 0:
        game = False
        print("\nYou win\n")
    if len(playerShips) == 0:
        game = False
        print("\nYou lost\n")

#------------------------------------------------------------------------
running = True
while running:
    play()
    ask = raw_input("Rematch?(y/n)")
    if ask == "n":
        running = False
    else:
        rematch = True
        game = False
        lastc = []
        lastp = []
        compBoard = []
        playerBoard = []
        playerShips = []
        compShips = []
