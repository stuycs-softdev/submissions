def in_danger(col, queens):
    return col in queens or any(abs(col - x) == len(queens) - i for i,x in enumerate(queens))

def nqueens(n):
    queens = [[]]
    for row in range(n):
        queens = (queen+[i+1]
                  for queen in queens
                  for i in range(n)
                  if not in_danger(i + 1, queen))
    return queens

def format(queens):
    string = ""
    queens = list(enumerate(next(queens), start = 1))
    for queen in queens:
        string += "- " * (int(queen[1]) - 1) + 'Q ' + "- " * (len(queens) - int(queen[1])) + "\n"
    return string
   
def writer(n):
    for i in range(7,n + 1):
        file = open(str(i) + ".txt",'w')
        string = format(nqueens(i))
        file.write(string)
        file.close()

writer(10)##starts at seven because below that it messes up
