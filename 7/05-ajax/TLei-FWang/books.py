import urllib2
import json
import csv
import string, random

def getBooks(userAsked, searchterm):
    if userAsked == True:
        bookfile = 'userBooklist.txt'
    elif userAsked == False:
        bookfile = 'booklist.txt'

    f = open(bookfile,'w')
    f.write("")
    f.close()
    url = "https://www.googleapis.com/books/v1/volumes?q=" + searchterm + "&key=" + "AIzaSyAbcq5DqVguTNomXJhuQhLp2ZX_0q4pOXY"
    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)
    
    bookToAdd = ""

    for book in r['items']:
        if "title" in book['volumeInfo']:
            bookToAdd += book['volumeInfo']['title'] + ";"
            if "authors" in book['volumeInfo']:
                authorlist = ""
                for b in book['volumeInfo']['authors']:
                    authorlist += b +", "
                bookToAdd += " " + authorlist + "\n"
            else:
                bookToAdd += "Author unknown\n"
                
        f = open(bookfile,'a') 
        f.write(bookToAdd)
        f.close()

        bookToAdd = ""

def randomSearch():
    rSearchTerm = random.choice(string.letters)
    #url = "http://www-personal.umich.edu/~jlawler/wordlist"
    #request = urllib2.urlopen(url)
    #result = request.read()
    #rSearchTerm = result[]
    getBooks(False, rSearchTerm)

#getBooks(True,"hi")
#getBooks(False,"hello")
randomSearch()
