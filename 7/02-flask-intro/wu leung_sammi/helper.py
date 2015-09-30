import os

def makeFile(question, text0, text1, text2, text3, text4, text5, text6, text7, \
text8, text9):
    addQ = open("questionList","a")
    addQ.write(question + "\n")
    addQ.close()
    f = open(question,"w")
    os.chmod( question,0666)
    f.write(question + "\n")
    f.write(text0 + "\n")
    f.write(text1 + "\n")
    f.write(text2 + "\n")
    f.write(text3 + "\n")
    f.write(text4 + "\n")
    f.write(text5 + "\n")
    f.write(text6 + "\n")
    f.write(text7 + "\n")
    f.write(text8 + "\n")
    f.write(text9 + "\n")
    return

def listify(question):
    f = open(question,"r")
    text = f.readlines()
    for i in range(len(text)):
        text[i] = text[i].strip("\n")
    f.close()
    return text

def allDict():
    f = open("questionList",'r')
    questions = f.readlines()
    dictionary = {}
    for question in questions:
        question = question.strip("\n")
        dictionary[question] = listify(question)
    f.close()
    return dictionary
