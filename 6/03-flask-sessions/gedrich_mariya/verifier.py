
def verify_user(u,p):
    d={}
    uname=str(u)
    pwd=str(p)
    f=open('database.txt','r')
    s=f.read()[:-1]
    print '\n\n\n'+s
    lines=s.split(';')
    print lines
    for line in lines:
        t=line.split(':')
        d[t[0]]=t[1]
    f.close()
    for a in d.keys():
        print a
    if uname in d.keys():
        if d[uname]==pwd:
            return True
        else:
            print 'wrong pass'
            return False
    else:
        print 'cant find uname'
        return False

def add_user(uname, pwd):
    f=open('database.txt','r')
    s=f.read()+uname+':'+pwd+';'
    f.close()
    g=open('database.txt','w')
    g.write(s)
    g.close()
    return True
    
