def decode(s):
    t=''
    x=0
    n=0
    while n<26:
        if x<len(s):
            t+=chr(((ord(s[x])-ord('a') + n) % 26) + ord('a'))
            x+=1
        else:
            t+='\n'
            n+=1
            x=0
    return t
print decode('deoh'),"""answer:able; shift of 23 letters"""+"\n"
print decode('ufwyd'),"""answer:party; shift of 21 letters"""+"\n"
print decode('udm'),"""answer:fox; shift of 11 letters"""+"\n"
