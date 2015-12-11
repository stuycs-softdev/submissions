# Util file for app, contains api calls

import requests

key = open("key.txt", "r").read()[:-1]

def get_lat_lng(address):
    """
    get_lat_lng: gets latitude and longitude from a given address

    Args:
        address (string): the address to look up

    Returns:
        a dictionary of the form {'lat': <latitude>, 'lng': <longitude>}
    """

    params = {'address':address, 'key':key}
    r = requests.get("https://maps.googleapis.com/maps/api/geocode/json", params = params)
    return r.json()['results'][0]['geometry']['location']

def dist(loc1, loc2):
    """
    dist: gives out the manhattan distance between two locations

    Args:
         loc1 (tuple of size 2): first location
         loc2 (tuple of size 2): second location

    Returns:
        a float that is the manhattan distance

    Example:
        dist((10, 2), (1, 3)) --> 10
    """

    return abs(loc1[0] - loc2[0]) + abs(loc1[1] - loc2[1])

def get_stock_quote(symbol):
    """
    get_stock_quote: get the stock quote from the stock symbol

    Args:
        symbol (string): the symbol for the stock
    
    Returns:
        a JSON object
    """

    params = {'symbol':symbol}
    r = requests.get("http://dev.markitondemand.com/MODApis/Api/v2/Quote/json", params = params)
    return r.json()
