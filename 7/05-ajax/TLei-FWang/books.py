import urllib2
import json
import csv

def getBooks(searchterm):
    f = open('booklist.txt','w')
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
                
        f = open('booklist.txt','a') 
        f.write(bookToAdd)
        f.close()

        bookToAdd = ""

#getBooks("hello")
