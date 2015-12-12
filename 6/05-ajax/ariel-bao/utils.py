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

def get_list(name):
     url = "http://api.nytimes.com/svc/books/v2/lists/%s.json?api-key=%s"
     url = url % (name, key)

     request = urllib2.urlopen(url)
     result = request.read()
     r = json.loads(result)

     return r["results"][0]["book_details"]
     
if __name__ == "__main__":
	#print get_listnames()
    print get_list("hardcover-fiction")
