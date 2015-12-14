import urllib2
import json
import spotipy
import spotipy.util as util
import requests
import base64

from spotipy.oauth2 import SpotifyClientCredentials

ci='clientid'
cs='clientsecret'

#replace with actual stuff
ccm=SpotifyClientCredentials(client_id='', client_secret='')
token=ccm.get_access_token()
sp=spotipy.Spotify(auth=token)


def get_new_albums():
    ''' TRIED TO DO PLAYLISTS, TO NO AVAIL :'(
    plays=sp.featured_playlists(locale=None, country=None, timestamp=None, limit=20, offset=0)['playlists']['items']
    play1=plays[0]
    tracks=play1['tracks']
    url2=tracks['href']
    print url2
    url='https://accounts.spotify.com/api/token'
    print url
    global ci, cs
    unenc=ci+':'+cs
    enc=base64.b64encode(ci+':'+cs)
    global token
    params={'grant_type':'client_credentials'}
    
    r=requests.post(url, data=params, auth=(ci, cs))
    token2=r.json()['access_token']
    print token2
    headers={'Authorization':'Bearer '+token2}
    nr=requests.post(url2, headers=headers)
    print nr
    '''
    print 'INSIIIDE'
    data=sp.new_releases(country=None, limit=20, offset=0)
    albums_data=data['albums']['items']
    #print albums_data[0].keys()
    albums_uris=[]
    for album in albums_data:
        albums_uris.append(album['uri'])
    #print albums_uris

    albums_all=[]
    for uri in albums_uris:
        albinf={}
        albdat=sp.album(uri)
        trackdat=sp.album_tracks(uri,limit=50,offset=0)['items']
        tracks=[]
        for track in trackdat:
            track_meta={}
            track_meta['name']=str(track['name'])
            track_meta['artists']=str(track['artists'][0]['name'])            
            track_meta['uri']=str(track['uri'])
            tracks.append(track_meta)
        albinf['name']=str(albdat['name'])
        albinf['artists']=str(albdat['artists'][0]['name'])
        albinf['image']=str(albdat['images'][0]['url'])
        albinf['tracks']=tracks;
        albums_all.append(albinf)

    print albums_all[0]
    return albums_all

def get_lyrics(titler):
    title=titler.replace(' ','%20');
    print title
    
    getid_url='http://api.musixmatch.com/ws/1.1/track.search?apikey=%s&q_track=%s&format=json&page_size=1&f_has_lyrics=1'
    key=''
    url = getid_url % (key, title)
    request = urllib2.urlopen(url)
    result=request.read()
    r=json.loads(result)
    track_id=r['message']['body']['track_list'][0]['track']['track_id']

    getlyrics_url='http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=%s&track_id=%s'
    url2=getlyrics_url % (key, track_id);
    request=urllib2.urlopen(url2)
    result=request.read()
    r=json.loads(result)
    lyrics= r['message']['body']['lyrics']['lyrics_body']
    return lyrics

#get_lyrics('karma police')
#get_new_albums()
