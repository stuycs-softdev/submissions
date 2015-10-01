from flask import Flask, render_template, request, redirect, url_for, session

app = Flask(__name__)

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

@app.route("/", methods=["GET","POST"])
@app.route("/sudoku", methods=["GET","POST"])
def sudokupage():
    if request.method=="GET":
        return render_template("sudoku.html")

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

    for i in range(81):
        k.append(int(request.form[""+chr(i/9+65)+chr(i%9+49)]))

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

    v=sudoku(g,h,r)
    if v==False:
        return render_template("sudoku.html",error=True)
    else:
        answers=[]
        for i in range(81):
            answers.append(str(v[i].index(1)+1))
        
        session["answers"]=answers
            
        return redirect(url_for("solve"))

@app.route("/solve")
def solve():
    if("answers" not in session):
        return redirect(url_for("sudoku"))
    else:
        htmlout = """
<html>
<head>
<title>Sudoku</title>
</head>
<body bgcolor="#3385ff">
<br>
<center><h1>Solution</h1></center>
<br>
<table align="center" border>
<colgroup span="3">
<colgroup span="3">
<colgroup span="3">
"""
        for i in range(81):
            if i%27==0:
                htmlout += '<tbody>'
            if i%9==0:
                htmlout += '<tr>'
            ii=3*((i/9)%3)+(i%3)
            if ii==0:
                htmlout += '<td align="center" style="text-align: center; border-left: solid medium; border-top: solid medium; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==1:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: solid medium; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==2:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: solid medium; border-right: solid medium; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==3:
                htmlout += '<td align="center" style="text-align: center; border-left: solid medium; border-top: 0px; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==4:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: 0px; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==5:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: solid medium; border-bottom: 0px; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==6:
                htmlout += '<td align="center" style="text-align: center; border-left: solid medium; border-top: 0px; border-right: 0px; border-bottom: solid medium; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==7:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: 0px; border-bottom: solid medium; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if ii==8:
                htmlout += '<td align="center" style="text-align: center; border-left: 0px; border-top: 0px; border-right: solid medium; border-bottom: solid medium; width: 40px; height: 40px; font-size: 25px">'+session["answers"][i]+'</td>'
            if i%9==8:
                htmlout += '</tr>'
            if i%27==26:
                htmlout += '</tbody>'
        htmlout += '</table><br><center><a href="sudoku">Another?</a></center></body></html>'
        return htmlout

if __name__=="__main__":
    app.debug = True
    app.secret_key="not so secret key"
    app.run(host='0.0.0.0',port=8000)
