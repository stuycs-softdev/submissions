#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import random

hair=['/////','|||||','^^^^^']
eyes=['-O-O-','+x+x+','#@#@#']
nose=['  V  ','  U  ',' <.> ']
upperlip=['  O  ','==U==','+=+=+']
coord=[hair,eyes,nose,upperlip]

def face():
    for l in coord:
        print random.choice(l)
    return ''
        
#************************************
        
print face()


