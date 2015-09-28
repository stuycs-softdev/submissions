from flask import Flask, render_template

app = Flask(__name__)

#IMPORTANT NOTE: This code does not use jinja yet, will add jinja in an update soon. Sorry :(

def like(x):
    f=[]
    for j in range(81):
        if (j!=x)and((x/9==j/9)or(x%9==j%9)or((x/27==j/27)and((x%9)/3==(j%9)/3))):
            f.append(j)
    return f

def sudoku(w,e,r):
    l=w[:]
    for i in range(81):
        l[i]=l[i][:]
    m=e[:]
    x=sum(m)
    while sum(m):
        for i in range(81):
            j=sum(l[i])
            if j==0:
                return False
            if j==1 and m[i]:
                a=l[i].index(1)
                b=like(i)
                for c in b:
                    l[c][a]=0
                m[i]=0
        for i in r:
            for j in range(9):
                c=0
                for z in i:
                    if l[z][j]:
                        if c:
                            c=1
                            break
                        else:
                            c=[z,j]
                if c==0:
                    return False
                elif c!=1:
                    l[c[0]]=[0,0,0,0,0,0,0,0,0]
                    l[c[0]][c[1]]=1
                    b=like(c[0])
                    for d in b:
                        l[d][c[1]]=0
                    m[c[0]]=0
        if sum(m)==x:
            y=m.index(1)
            z=l[y].index(1)
            p=l[:]
            p[y]=[0,0,0,0,0,0,0,0,0]
            p[y][z]=1
            t = sudoku(p,m,r)
            if t:
                return t
            else:
                l[y][z]=0
        else:
            x=sum(m)
    return l

@app.route("/primes")
def primes():
    a = [True] * 10000
    a[0] = False
    a[1] = False
    i = 2
    while i < 10000:
        if a[i]:
            j = 2*i
            while j < 10000:
                a[j] = False
                j+=i
        i+=1
    s = "<h1>PRIMES</h1><ol>"
    for i in range (10000):
        if a[i]:
            s+="<li>"+str(i)+"</li>"
    s+="</ol>"
    return s


@app.route("/sudoku/<line1>/<line2>/<line3>/<line4>/<line5>/<line6>/<line7>/<line8>/<line9>")
def sudoku_helper(line1="000000000",line2="000000000",line3="000000000",line4="000000000",line5="000000000",line6="000000000",line7="000000000",line8="000000000",line9="000000000"):
    g=[]
    h=[]
    r=[[],[],[],[],[],[],[],[],[]]

    for n in range(81):
        g.append([1,1,1,1,1,1,1,1,1])
        h.append(1)
        r[3*(n/27)+(n%9)/3].append(n)
        
    for n in range(9):
        r.append(range(9*n+9)[9*n:])
        r.append(range(81)[n::9])

    k=[]
    
    for i in range(9):
        k.append(ord(line1[i])-48)
    for i in range(9):
        k.append(ord(line2[i])-48)
    for i in range(9):
        k.append(ord(line3[i])-48)
    for i in range(9):
        k.append(ord(line4[i])-48)
    for i in range(9):
        k.append(ord(line5[i])-48)
    for i in range(9):
        k.append(ord(line6[i])-48)
    for i in range(9):
        k.append(ord(line7[i])-48)
    for i in range(9):
        k.append(ord(line8[i])-48)
    for i in range(9):
        k.append(ord(line9[i])-48)

    for n in range(81):
        if k[n]:
            h[n]=0
            q=k[n]-1
            for j in range(9):
                if j!=q:
                    g[n][j]=0
            c=like(n)
            for j in c:
                g[j][q]=0

    htmlout = '<html><head><title>Sudoku</title></head><body><center><h1>Enter the known values of your sudoku into the url. Each block of digits represents a row of the sudoku. Leave unkown squares "0".</h1><h2>If your sudoku has multiple solutions, we will provide only one valid solution.  If it has no solutions, say you set two consecutive squares to be "1", it will say so.</h2></center>'
    v=sudoku(g,h,r)
    if v==False:
        htmlout += '<center><h3>Sadly, your sudoku had no solution.</h3></center></body></html>'
    else:
        htmlout += '<center><h3>The Solution:</h3></center><table align="center" border><colgroup span="3"><colgroup span="3"><colgroup span="3">'
        for i in range(81):
            if i%27==0:
                htmlout += '<tbody>'
            if i%9==0:
                htmlout += '<tr>'
            ii=3*((i/9)%3)+(i%3)
            if ii==0:
                htmlout += '<td align="center" style="text-align: center; border-left: solid medium; border-top: solid medium; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==1:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: solid medium; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==2:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: solid medium; border-right: solid medium; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==3:
                htmlout += '<td align="center" style="text-align: center; border-left: solid medium; border-top: 0px; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==4:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==5:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: solid medium; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==6:
                htmlout += '<td align="center" style="text-align: center; border-left: solid medium; border-top: 0px; border-right: 0px; border-bottom: solid medium; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==7:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: 0px; border-bottom: solid medium; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if ii==8:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: solid medium; border-bottom: solid medium; width: 40px; height: 40px; font-size: 25px">'+str(v[i].index(1)+1)+'</td>'
            if i%9==8:
                htmlout += '</tr>'
            if i%27==26:
                htmlout += '</tbody>'
        htmlout += '</table></body></html>'
    return htmlout


    

@app.route("/")
@app.route("/home")
def home():
    return render_template("home.html")

if __name__=="__main__":
    app.debug = True
    app.run(host='0.0.0.0',port=8000)
