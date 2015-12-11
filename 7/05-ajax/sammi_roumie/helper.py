import json, urllib2

def get_image(name):
    key = "76dbd607845e97504b660d0dff53e581"
    method = "flickr.photos.search"
    uri = "https://www.flickr.com/services/rest/?api_key=%s&method=%s&format=json&text=%s&nojsoncallback=1"
    url = uri%(key,method,name)
    request = urllib2.urlopen(url).read()
    result = json.loads(request)
    result = result["photos"]["photo"]
    for photo in result:
        if (photo["ispublic"] == 1):
            farm = photo["farm"]
            server = photo["server"]
            id = photo["id"]
            secret = photo["secret"]
            link_ = "https://farm%s.staticflickr.com/%s/%s_%s.jpg"
            link = link_%(farm,server,id,secret)
            image = {'link':link}
            return json.dumps(image)


    
