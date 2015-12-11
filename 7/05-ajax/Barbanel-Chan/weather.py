import urllib2, json, re
from bs4 import BeautifulSoup

def weather_by_name(city):
    """requests the weather data for city from the openweathermap api

    Args:
       city: A string containing a valid city name.
    
    Returns:
       Json of weather data.
    """
    key = "4a2a82ee8a8dec7dc93d7bf8e048a6bc"
    uri = "http://api.openweathermap.org/data/2.5/weather?q=%s&APPID=%s"
    url = uri%(city,key)
    request = urllib2.urlopen(url)
    result = json.loads(request.read())
    #print json.dumps(result, sort_keys=True, indent=4)
    return result

def weather_by_zip(zip_code):
    """requests the weather data at zip_code from the openweathermap api

    Args:
       zip_code: A string or int containing a valid zip code.
    
    Returns:
       Json of weather data.
    """
    key = "4a2a82ee8a8dec7dc93d7bf8e048a6bc"
    uri = "http://api.openweathermap.org/data/2.5/weather?zip=%s,us&APPID=%s"
    url = uri%(zip_code,key)
    request = urllib2.urlopen(url)
    result = json.loads(request.read())
    #print json.dumps(result, sort_keys=True, indent=4)
    return result
    
def kelvin_to_f(kel):
    return (kel - 273.15)*1.8 + 32.0

def get_temp(city):
    """Gets the temperature in city.

    Args:
       city: A string containing a valid city name.
    
    Returns:
       The current temperature in city.
    """
    city = re.sub(r'\s','',city);
    data = weather_by_name(city)
    if "message" in data:
        return data["message"]
    temp = data["main"]["temp"]
    return "%.2f" % kelvin_to_f(temp)


