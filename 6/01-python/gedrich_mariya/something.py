grid=[]
turn=0
solved=False

for y in range(9):
    grid.append([])

for y in range(9):
    for x in range(9):
        if x<2 or y<2 or x>6 or y>6:
            grid[x].append(-1)
        else:
            grid[x].append(0)

def printGrid():
    s=''
    for y in range(len(grid)):
        for x in range(len(grid[0])):
            s+="%03d" % (grid[x][y])
            s+=' '
        s+='\n'
    
    print s

def joust(x,y):
    if grid[x][y]!=0 or solved:
        return
    global turn
    turn+=1
    grid[x][y]=turn

    if turn==25:
        printGrid()
        solved=True

    joust(x+2,y+1)
    joust(x+2,y-1)
    joust(x-2,y+1)
    joust(x-2,y-1)
    joust(x+1,y+2)
    joust(x+1,y-2)
    joust(x-1,y+2)
    joust(x-1,y-2)

    global solved
    if not solved:
        grid[x][y]=0
        turn-=1

printGrid()
joust(2,2)
