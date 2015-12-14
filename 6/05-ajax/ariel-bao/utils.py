import json
import urllib2

key = "c1317daa479302572934e2b3f702d523:1:73728355"

def get_listnames():
    url = "http://api.nytimes.com/svc/books/v2/lists/names.json?api-key=%s"
    url = url % key

    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)

    l = []
    listnames = r["results"]
    for name in listnames:
        l.append(name["list_name"])
        
    return sorted(l)


def get_list(name="animals", sort_by="", search_by="title", query=""):
    if name == "book-list":
        name = "animals"
    if sort_by == "sort-by":
        sort_by = ""
    if search_by == "search-by":
        search_by = "title"
    
    url = "http://api.nytimes.com/svc/books/v2/lists/%s.json?api-key=%s&sort-by=%s"
    url = url % (name, key, sort_by)

    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)
     
    if query and not query.isspace():
        query = query.strip()
        books = r["results"]
        i = 0
        while (i < len(books)):
            element = books[i]["book_details"][0][search_by]
            if (query not in element.lower()):
                books.pop(i);
            else:
                i += 1
    return r

     
if __name__ == "__main__":
	#print get_listnames()
    print get_list("animals", query="cat")
