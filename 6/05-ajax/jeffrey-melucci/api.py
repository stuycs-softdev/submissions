import urllib2

def lookUp():
    '''Uses the songkick api to search for the city and artists performing in an event
    Parameters: None
    Returns: Dictionary with keys 'city' and 'names'
    Note: 'name' is a list
    '''
    key = "fKR4qB0M4VT3h025";
    url = "http://api.songkick.com/api/3.0/events/.json?apikey=%s"
    url = url%(key)
    request = urllib2.urlopen(url)
    result = request.read()
    r = json.loads(result)
    event = r['resultPage']['results']['event']
    city = event['location']['city']
    names = []
    for i in event['performance']:
        names.append(i['dislayName'])
    searchResults = {
    'city':city,
    'names':names
    }
    return searchResults
