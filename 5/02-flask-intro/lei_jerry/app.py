from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/stuff",methods = ["GET","POST"])
def stuff():
    if request.method=="GET":
        return render_template("old.html")
    else:
        button = request.form['button']
        texty=request.form['texty']

        f=open('templates/old.html', 'a')
        f.write(texty+ '<br>\n')
        f.close()
        

        if button =="go":
            return render_template("old.html")
        return render_template("old.html")



if __name__ == "__main__":
   app.debug = True
   app.run(host="0.0.0.0", port=8000)



