names = []

def openFile():
    f = open('p022_names.txt', 'r')
    nameString = f.readline()
    return nameString

def stringToArray(nameString):
    tempString = ""
    for char in nameString:
        if char == ",":
            names.append(tempString)
            tempString = ""
        elif char != "\"":
            tempString += char;

def main():
    stringToArray(openFile())
    total = 0
    for line in names:
        print line
    for line in range(len(names)):
        temp = 0
        for char in names[line]:
            temp += ord(char) - 64
        temp *= (line + 1)
        total += temp
    print total

main()
