def rotx(toEncrypt,n):
    r=''
    word=toEncrypt.lower()
    alpha='abcdefghijklmnopqrstuvwxyz'
    shift=n%26
    rotalpha=alpha[shift:]+alpha[:26-shift]
    for i in range(len(word)):
        if alpha.find(word[i])==-1:
            r+=word[i]
        else:
            r+=rotalpha[alpha.find(word[i])]
    return r


