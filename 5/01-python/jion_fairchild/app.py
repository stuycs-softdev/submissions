from flask import Flask, render_template

app flask = (__name__)

@app.route("main")
def main():
    return render_template("main.html");
    
