import urllib2
import json

def getdata(category):
        url = "http://api.nytimes.com/svc/search/v2/articlesearch/" + category + ".jsonp?callback=nyt_biz_news_cb&api-key=024b40b8c1e9ef1333054858a907a687:6:73721357"
        result = json.loads(urllib2.open(url).read())
        return result


print getdata("sports")
